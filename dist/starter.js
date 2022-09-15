const starter = document.getElementById('starter');
const body = document.body;
// body.style.overflow = 'hidden';
setTimeout(() => {
  $(starter).animate(
    {
      opacity: 0,
      top: '50',
    },
    1000,
    function () {
      starter.style.display = 'none';
      body.style.overflow = 'unset';
    }
  );
}, 4500);

