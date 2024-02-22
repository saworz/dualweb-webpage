import React, { useState, useEffect, useRef } from 'react';
import { HALF_PI, TAU, TO_RAD, rand, fadeInOut } from '../../settings/Math';
import useWindowSize from '../../hooks/useWindowSize';
const { cos, sin, round } = Math;


const Pipeline = ({animationSeconds, slowDownSteps, animationTrigger}) => {
  const windowSize = useWindowSize()
  
  const pipeCount = round(windowSize.width / 25) // amount of pipes alive at the same moment
  let baseSpeed
  let rangeSpeed

  if (windowSize.width > 2400) {
    baseSpeed = 0.6;
    rangeSpeed = 1;
  } else if (windowSize.width > 1200) {
    baseSpeed = 0.5;
    rangeSpeed = 0.8
  } else if (windowSize.width > 400) {
    baseSpeed = 0.4
    rangeSpeed = 0.6
  } else {
    baseSpeed = 0.3
    rangeSpeed = 0.5
  }

  const pipePropCount = 10;
  const pipePropsLength = pipeCount * pipePropCount;
  const turnCount = 8;  // how sharp turn
  const turnAmount = (360 / turnCount) * Math.PI / 180;
  const turnChanceRange = 100;  // how often turns 
  const baseTTL = 250;  // ticks life per pipe
  const rangeTTL = 300; // ticks life range
  const baseWidth = 3;
  const rangeWidth = 2;
  const baseHue = 180;
  const rangeHue = 60;
  const backgroundColor = 'hsla(150,80%,1%,1)';

  const canvasARef = useRef(null);
  const canvasBRef = useRef(null);
  const ctxARef = useRef(null);
  const ctxBRef = useRef(null);
  const centerRef = useRef([0, 0]);
  const tickRef = useRef(0);
  const pipePropsRef = useRef(null);

  const timedOut = useRef(false)  // stops drawing when set to true
  const percSpeed = useRef(100) // pipes perc speed used for smooth slowdown
  const animationRequest = useRef(null) // used to cancel animation so speeds dont mess up

  // reset values on window size change
  useEffect (() => {
    percSpeed.current = 100
    timedOut.current = false
    window.cancelAnimationFrame(animationRequest.current)
  }, [windowSize, animationTrigger])

  // slow down steps
  useEffect(() => {
    const interval = setInterval(() => {
      const slowDownPerStep = 100/slowDownSteps
      percSpeed.current -= slowDownPerStep

      if (percSpeed.current <= 0) {
        clearInterval(interval)
      }
    }, animationSeconds*1000/slowDownSteps);

    return () => clearInterval(interval);
  }, [windowSize, animationTrigger]);

  // animation stop
  useEffect(() => {
    const timer = setTimeout(() => {
      timedOut.current = true;
    }, animationSeconds*1000);

    return () => clearTimeout(timer);
  }, [windowSize, animationTrigger]);

  // execute animation
  useEffect(() => {
      setup();
      draw();
  }, [windowSize, animationTrigger]);

  const setup = () => {
    createCanvas();
    resize();
    initPipes();
  };

  const createCanvas = () => {

    if (canvasARef.current) {
      canvasARef.current.remove()
    }

    if (canvasBRef.current) {
      canvasBRef.current.remove()
    }

    canvasARef.current = document.createElement('canvas');
    canvasBRef.current = document.createElement('canvas');

    ctxARef.current = canvasARef.current.getContext('2d');
    ctxBRef.current = canvasBRef.current.getContext('2d');

    pipePropsRef.current = new Float32Array(pipePropsLength);

    centerRef.current = [];
    tickRef.current = 0;

    const container = document.querySelector('.content--canvas');
	  // canvasBRef.current.style.position = 'fixed';
    canvasBRef.current.style.zIndex = '-1';
    container.appendChild(canvasBRef.current);
  };

  const resize = () => {
    
    const { innerWidth, innerHeight } = window;
    canvasARef.current.width = innerWidth;
    canvasARef.current.height = innerHeight;
    ctxARef.current.drawImage(canvasBRef.current, 0, 0);

    canvasBRef.current.width = innerWidth;
    canvasBRef.current.height = innerHeight;
    ctxBRef.current.drawImage(canvasARef.current, 0, 0);

    centerRef.current[0] = 0.5 * innerWidth;
    centerRef.current[1] = 0.5 * innerHeight;
  };

  const initPipes = () => {
    for (let i = 0; i < pipePropsLength; i += pipePropCount) {
      initPipe(i);
    }
  };

  const initPipe = (i) => {
    let x, y, direction, speed, life, ttl, width, hue;

    x = rand(canvasARef.current.width);
    y = centerRef.current[1];
    direction = (round(rand(1)) ? Math.PI / 2 : Math.PI * 1.5);
    speed = baseSpeed + rand(rangeSpeed);
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    width = baseWidth + rand(rangeWidth);
    hue = baseHue + rand(rangeHue);
    pipePropsRef.current.set([x, y, direction, speed, life, ttl, width, hue], i);
  };

  const updatePipes = () => {
    tickRef.current++;

    for (let i = 0; i < pipePropsLength; i += pipePropCount) {
      updatePipe(i);
    }
  };

  const updatePipe = (i) => {
    let x, y, direction, speed, life, ttl, width, hue, turnChance, turnBias;

    x = pipePropsRef.current[i];
    y = pipePropsRef.current[i + 1];
    direction = pipePropsRef.current[i + 2];
    speed = pipePropsRef.current[i + 3] * percSpeed.current/100;  // added second part for speed scaling
    life = pipePropsRef.current[i + 4];
    ttl = pipePropsRef.current[i + 5];
    width = pipePropsRef.current[i + 6];
    hue = pipePropsRef.current[i + 7];
    
    drawPipe(x, y, life, ttl, width, hue);

    life++;
    x += Math.cos(direction) * speed;
    y += Math.sin(direction) * speed;
    turnChance = !(tickRef.current % Math.round(rand(turnChanceRange))) && (!(Math.round(x) % 6) || !(Math.round(y) % 6));
    turnBias = Math.round(rand(1)) ? -1 : 1;
    direction += turnChance ? turnAmount * turnBias : 0;

    pipePropsRef.current[i] = x;
    pipePropsRef.current[i + 1] = y;
    pipePropsRef.current[i + 2] = direction;
    pipePropsRef.current[i + 4] = life;

    checkBounds(x, y);
    if (life > ttl && percSpeed.current > 40) { //stop creating new pipes when speed is below 40%
      initPipe(i);
    }
  };

  const drawPipe = (x, y, life, ttl, width, hue) => {
    ctxARef.current.save();
    ctxARef.current.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.125})`;
    ctxARef.current.beginPath();
    ctxARef.current.arc(x, y, width, 0, Math.PI * 2);
    ctxARef.current.stroke();
    ctxARef.current.closePath();
    ctxARef.current.restore();
  };

  const checkBounds = (x, y) => {
    if (x > canvasARef.current.width) x = 0;
    if (x < 0) x = canvasARef.current.width;
    if (y > canvasARef.current.height) y = 0;
    if (y < 0) y = canvasARef.current.height;
  };

  const draw = () => {
      if (!timedOut.current) { //stop updating pipes when animation is timed out
        animationTrigger && updatePipes();
        render();
        animationRequest.current = window.requestAnimationFrame(draw);
      }
  };

  const render = () => {
    ctxBRef.current.save();
    ctxBRef.current.fillStyle = backgroundColor;
    ctxBRef.current.fillRect(0, 0, canvasBRef.current.width, canvasBRef.current.height);
    ctxBRef.current.restore();

    ctxBRef.current.save();
    ctxBRef.current.filter = 'blur(12px)';
    ctxBRef.current.drawImage(canvasARef.current, 0, 0);
    ctxBRef.current.restore();

    ctxBRef.current.save();
    ctxBRef.current.drawImage(canvasARef.current, 0, 0);
    ctxBRef.current.restore();
  };

  return <div className="content--canvas"></div>;
};

export default Pipeline;
