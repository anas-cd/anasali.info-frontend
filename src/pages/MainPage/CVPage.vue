<template>
  <q-page id="cv-grid">
    <div class="cell profile-cell">
      <profile-card v-if="store.profile"></profile-card>
      <q-skeleton v-else height="620px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell skills-cell">
      <skills-card v-if="store.skills"></skills-card>
      <q-skeleton v-else height="850px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell tools-cell">
      <tech-and-tools-card v-if="store.techAndTools"></tech-and-tools-card>
      <q-skeleton v-else height="740px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell languages-cell">
      <languages-card v-if="store.languages"></languages-card>
      <q-skeleton v-else height="140px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell education-cell">
      <Education-card v-if="store.education"></Education-card>
      <q-skeleton v-else height="240px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell xp-cell">
      <experience-card v-if="store.experience"></experience-card>
      <q-skeleton v-else height="720px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell projects-cell">
      <projects-card v-if="store.projects"></projects-card>
      <q-skeleton v-else height="550px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell courses-cell">
      <courses-card v-if="store.courses"></courses-card>
      <q-skeleton v-else height="340px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell hobbies-cell">
      <hobbies-card v-if="store.hobbies"></hobbies-card>
      <q-skeleton v-else height="560px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell interests-cell">
      <interests-card v-if="store.interests"></interests-card>
      <q-skeleton v-else height="600px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
    <div class="cell contact-cell">
      <contact-card v-if="!store.isFetching"></contact-card>
      <q-skeleton v-else height="480px" width="100%"></q-skeleton>
      <q-resize-observer @resize="resizeDebouncer" />
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { debounce } from "quasar";
import { usePortfolioStore } from "src/stores/portfolio";
import ProfileCard from "components/CVPage/ProfileCard.vue";
import SkillsCard from "components/CVPage/SkillsCard.vue";
import TechAndToolsCard from "components/CVPage/TechAndToolsCard.vue";
import LanguagesCard from "components/CVPage/LanguagesCard.vue";
import ExperienceCard from "components/CVPage/ExperienceCard.vue";
import ProjectsCard from "components/CVPage/ProjectsCard.vue";
import CoursesCard from "components/CVPage/CoursesCard.vue";
import HobbiesCard from "components/CVPage/HobbiesCard.vue";
import InterestsCard from "components/CVPage/InterestsCard.vue";
import ContactCard from "components/CVPage/ContactCard.vue";
import EducationCard from "components/CVPage/EducationCard.vue";

/* --- data logic start --- */
// - use portfolio store
const store = usePortfolioStore();
// - fetch data
store.fetchData();
/* --- end data logic --- */

/* --- styling logic start --- */
// -- helper function --
function getHighestIndex(array, targetIndexes) {
  // - Check if array is empty or targetIndexes is empty -
  if (!array.length || !targetIndexes.length) {
    return null;
  }

  // - Validate targetIndexes within array bounds -
  const validIndexes = targetIndexes.filter(
    (index) => index >= 0 && index < array.length,
  );

  // - Check if any valid indexes remain -
  if (!validIndexes.length) {
    return "target indexes out of bounds";
  }

  // - Find the maximum value and its corresponding index within the valid indexes -
  let highestValue = array[validIndexes[0]];
  let highestIndex = validIndexes[0];
  for (const index of validIndexes) {
    if (array[index] > highestValue) {
      highestValue = array[index];
      highestIndex = index;
    }
  }

  return highestIndex;
}
// -- item fitter function --
function fitItem(item, startingRowNumber) {
  let gridContainer = document.getElementById("cv-grid");
  let rowHeight = parseInt(
    window.getComputedStyle(gridContainer).getPropertyValue("grid-auto-rows"), // set via CSS
  );
  let rowGap = parseInt(
    window.getComputedStyle(gridContainer).getPropertyValue("grid-row-gap"), // set via CSS
  );
  let rowSpan = Math.ceil(
    (item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap),
  );
  let RStart = startingRowNumber;
  let REnd = startingRowNumber + rowSpan;
  item.style.gridRowStart = RStart;
  item.style.gridRowEnd = REnd;
  return REnd;
}
// -- main arrangement function --
function resizeAllGridItems() {
  // NOTE: the current number of rows taken of each column (this is only designed for 3 columns), thus each index number indicates the last row index in each column
  let takenRows = [1, 1, 1];
  let allItems = document.getElementsByClassName("cell");
  /**
   * code assuming the following columns configs only
   * - 1 & 2 & 3 (item spanning all columns)
   * - 1 & 2 (item spanning first two columns)
   * - 2 & 3 (item spanning last two columns)
   * - 1 / 2 / 3 (item spanning one column)
   */
  for (let x = 0; x < allItems.length; x++) {
    let CStart = getComputedStyle(allItems[x]).gridColumnStart; // set via CSS for each component
    let CEnd = getComputedStyle(allItems[x]).gridColumnEnd; // set via CSS for each component
    let startingRowNumber = null;
    /**
     * this is only a hard coded way to find the items column for a 3 columns setup,
     * if an unkown number of columns is expected then changing this approach to be more dynamic is a necessity
     */
    if (CStart == 1 && CEnd == 2) {
      // -- if spanning only column 1 --
      startingRowNumber = takenRows[0];
      takenRows[0] = fitItem(allItems[x], startingRowNumber); // will return the updated number of rows taken
    } else if (CStart == 1 && CEnd == 4) {
      // -- if spanning all columns --
      let takenRowsIndex = takenRows.indexOf(Math.max(...takenRows)); // getting the index of the biggest row number
      startingRowNumber = Math.max(...takenRows); // getting the biggest row number as a starting point (so the item starts from the latest item in all fields and doesn't overlap)
      takenRows[takenRowsIndex] = fitItem(allItems[x], startingRowNumber);
    } else if (CStart == 2 && CEnd == 3) {
      // -- if spanning only column 2 --
      startingRowNumber = takenRows[1];
      takenRows[1] = fitItem(allItems[x], startingRowNumber);
    } else if (CStart == 2 && CEnd == 4) {
      // -- if spanning columns 2 & 3 --
      let takenRowsIndex = getHighestIndex(takenRows, [1, 2]);
      startingRowNumber = Math.max(takenRows[1], takenRows[2]);
      takenRows[takenRowsIndex] = fitItem(allItems[x], startingRowNumber);
    } else if (CStart == 3 && CEnd == 4) {
      // -- if spanning only column 3 --
      startingRowNumber = takenRows[2];
      takenRows[2] = fitItem(allItems[x], startingRowNumber);
    } else if (CStart == 1 && CEnd == 2) {
      // -- if spanning columns 1 & 2 --
      let takenRowsIndex = getHighestIndex(takenRows, [0, 1]);
      startingRowNumber = Math.max(takenRows[0], takenRows[1]);
      takenRows[takenRowsIndex] = fitItem(allItems[x], startingRowNumber);
    }
  }
}

// -- debouncing --
const resizeDebouncer = debounce(resizeAllGridItems, 50);

onMounted(async () => {
  window.addEventListener("resize", resizeDebouncer);
});
onUnmounted(async () => {
  window.removeEventListener("resize", resizeDebouncer);
});
/* --- end styling logic --- */
</script>

<style lang="scss">
.q-page {
  display: grid;
  grid-template-columns: 1.3fr 2fr 2fr;
  grid-auto-rows: 3px; // pixels per row, the smaller it is the finer the positioning gets, but too small and it will take unnecessary computational power
  column-gap: 10px;
  row-gap: 20px;
  margin: 0.5rem;
  margin-top: 0;
  width: 100%;

  @media #{$mq-1024-down} {
    grid-template-columns: 1fr 1fr 0fr;
  }
  @media #{$mq-768-down} {
    grid-template-columns: 1fr 0fr 0fr;
  }
  @media #{$mq-480-down} {
    margin: unset;
  }

  // -- cells columns positioning classes --
  .profile-cell {
    grid-column-start: 1;
    grid-column-end: 2;

    @media #{$mq-1024-down} {
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
  .skills-cell {
    grid-column-start: 2;
    grid-column-end: 3;

    @media #{$mq-1024-down} {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  .tools-cell {
    grid-column-start: 3;
    grid-column-end: 4;

    @media #{$mq-1024-down} {
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
  .languages-cell {
    grid-column-start: 2;
    grid-column-end: 3;

    @media #{$mq-1024-down} {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  .education-cell {
    grid-column-start: 3;
    grid-column-end: 4;

    @media #{$mq-1024-down} {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  .xp-cell {
    grid-column-start: 1;
    grid-column-end: 2;

    @media #{$mq-1024-down} {
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
  .projects-cell {
    grid-column-start: 2;
    grid-column-end: 4;

    @media #{$mq-1024-down} {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  .courses-cell {
    grid-column-start: 2;
    grid-column-end: 4;

    @media #{$mq-1024-down} {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  .hobbies-cell {
    grid-column-start: 1;
    grid-column-end: 2;

    @media #{$mq-1024-down} {
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
  .interests-cell {
    grid-column-start: 2;
    grid-column-end: 4;

    @media #{$mq-1024-down} {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  .contact-cell {
    grid-column-start: 1;
    grid-column-end: 2;

    @media #{$mq-1024-down} {
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
  .cell {
    height: fit-content;
    width: 100%;

    .q-skeleton {
      border-radius: 10px;
    }

    @media #{$mq-768-down} {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
}
</style>
