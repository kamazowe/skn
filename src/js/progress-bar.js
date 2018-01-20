
(function(){
  function progressBar() {

    const windowTop = window.scrollY,
      documentHeight = document.documentElement.scrollHeight,
      windowHeight = window.innerHeight;

    const totalScroll = (windowTop/(documentHeight-windowHeight))*100;

    document.querySelector('.progress-bar__filling').style.width = totalScroll+'%';
  }

const throttle = function(callback,limit){
  let wait = false;
  return function(){
    if(!wait){
      callback();
      wait = true;
      setTimeout(function(){
        wait=false;
      },limit)
    }
  }
};
const debounce =function(callback,time){
  let timeout;
  return function(){
    const that = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      callback.apply(that,args);
      console.log(`scrollY ${window.scrollY}, scrollHeight ${document.documentElement.scrollHeight} ,windowHeight ${window.innerHeight}`);


    },time || 200);
  };
}
  window.addEventListener('scroll', throttle(progressBar,100 ));
  window.addEventListener('scroll',debounce(progressBar,200))

})();
