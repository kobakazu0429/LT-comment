const delayedCall = (second: number, callBack: Function) => {
  setTimeout(callBack, second * 1000);
};

export default delayedCall;
