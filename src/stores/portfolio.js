import { defineStore } from "pinia";
import { ref, watch } from "vue";
import profileAPI from "src/services/profileAPI";
import skillsAPI from "src/services/skillsAPI";
import techStackAPI from "src/services/techStackAPI";
import languagesAPI from "src/services/languagesAPI";
import experienceAPI from "src/services/experienceAPI";
import projectsAPI from "src/services/projectsAPI";
import coursesAPI from "src/services/coursesAPI";
import hobbiesAPI from "src/services/hobbiesAPI";
import interestsAPI from "src/services/interestsAPI";
import educationAPI from "src/services/educationAPI";
import handleError from "src/utils/handleError";

export const usePortfolioStore = defineStore("portfolio", () => {
  /* -- states -- */
  // -- data --
  const profile = ref();
  const skills = ref();
  const techAndTools = ref();
  const languages = ref();
  const experience = ref();
  const projects = ref();
  const courses = ref();
  const hobbies = ref();
  const interests = ref();
  const education = ref();
  // -- status indicators --
  const isFetching = ref(false);

  /* -- getters -- */

  /* -- functions -- */
  async function fetchData() {
    // - updating status -
    isFetching.value = true;

    await Promise.all([
      profileAPI
        .getProfileData()
        .then((res) => {
          profile.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
      skillsAPI
        .getSkillsData()
        .then((res) => {
          skills.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
      techStackAPI
        .getTechData()
        .then((res) => {
          techAndTools.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
      languagesAPI
        .getLanguagesData()
        .then((res) => {
          languages.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
      experienceAPI
        .getExperienceData()
        .then((res) => {
          experience.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
      projectsAPI
        .getProjectsData()
        .then((res) => {
          projects.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
      coursesAPI
        .getCoursesData()
        .then((res) => {
          courses.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
      hobbiesAPI
        .getHobbiesData()
        .then((res) => {
          hobbies.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
      interestsAPI
        .getInterestsData()
        .then((res) => {
          interests.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
      educationAPI
        .getEducationData()
        .then((res) => {
          education.value = res.data.data;
        })
        .catch((error) => handleError(error, error.message)),
    ]).finally(() => {
      // - updating status -
      isFetching.value = false;
    });
  }
  function clearErrors() {
    error.value = [];
  }

  return {
    /* -- states -- */
    // -- data --
    profile,
    skills,
    techAndTools,
    languages,
    experience,
    projects,
    courses,
    hobbies,
    interests,
    education,
    // -- status --
    isFetching,
    /* -- getters -- */
    /* -- functions -- */
    fetchData,
    clearErrors,
  };
});
