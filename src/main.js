import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');

// grid effect
function resizeGridItem(item, startingPoint) {
  let grid = document.getElementById('cvgrid');
  let rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
  );
  let rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
  );
  let rowSpan = Math.ceil(
    (item.querySelector('.item').getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap)
  );
  let RStart = startingPoint;
  let REnd = startingPoint + rowSpan;
  item.style.gridRowStart = RStart;
  item.style.gridRowEnd = REnd;
  return REnd;
}

function resizeAllGridItems() {
  let CLast = [1, 1, 1];
  let allItems = document.getElementsByClassName('content');
  // code assuming only configurations can be at first column, second column, third column, second&third column , first and second or all columns
  for (let x = 0; x < allItems.length; x++) {
    let CStart = getComputedStyle(allItems[x]).gridColumnStart;
    let CEnd = getComputedStyle(allItems[x]).gridColumnEnd;
    let startingPoint = null;
    if (CStart == 1 && CEnd == 2) {
      startingPoint = CLast[0];
      CLast[0] = resizeGridItem(allItems[x], startingPoint);
    } else if (CStart == 1 && CEnd == 4) {
      let CLastIndex = CLast.indexOf(Math.max(...CLast));
      startingPoint = Math.max(...CLast);
      CLast[CLastIndex] = resizeGridItem(allItems[x], startingPoint);
    } else if (CStart == 2 && CEnd == 3) {
      startingPoint = CLast[1];
      CLast[1] = resizeGridItem(allItems[x], startingPoint);
    } else if (CStart == 2 && CEnd == 4) {
      let CLastIndex = CLast.indexOf(Math.max(CLast[1], CLast[2]));
      startingPoint = Math.max(CLast[1], CLast[2]);
      CLast[CLastIndex] = resizeGridItem(allItems[x], startingPoint);
    } else if (CStart == 3 && CEnd == 4) {
      startingPoint = CLast[2];
      CLast[2] = resizeGridItem(allItems[x], startingPoint);
    }
  }
}

// function resizeInstance(instance) {
//   //     // let item = instance.elements[0];
//   //     // app.global.resizeGridItem(item);
//   //     app.global.resizeGridItem(instance);
// }
setTimeout(() => {
  window.onload = resizeAllGridItems();
}, 3000);

window.addEventListener('resize', resizeAllGridItems);

/* for selective refreshing */
// let allItems = document.getElementsByClassName("content");
// for(let x=0;x<allItems.length;x++){
//     imagesLoaded( allItems[x], app.global.resizeInstance(allItems[x]));
// }
// let allItems = document.getElementsByClassName('content');
// for (let x = 0; x < allItems.length; x++) {
//   imagesLoaded(allItems[x], resizeAllGridItems);
// }
