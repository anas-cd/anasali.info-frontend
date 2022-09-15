<template>
  <div class="card">
    <h2>Tools</h2>
    <a href="https://code.visualstudio.com/" target="_blank">
      <div class="tool">
        <img
          src="@/assets/images/Visual_Studio_Code_icon.png"
          alt="visual code"
        />
        <p>VS Code</p>
      </div>
    </a>
    <a href="https://www.figma.com/" target="_blank">
      <div class="tool">
        <img src="@/assets/images/Figma-icon.png" alt="figma" />
        <p>Figma</p>
      </div>
    </a>
    <a href="https://gulpjs.com/" target="_blank">
      <div class="tool">
        <img src="@/assets/images/gulp-icon.png" alt="gulp" />
        <p>Gulp</p>
      </div>
    </a>
    <a href="https://git-scm.com/" target="_blank">
      <div class="tool">
        <img src="@/assets/images/git-icon.png" alt="git" />
        <p>Git</p>
      </div>
    </a>
    <a href="https://yarnpkg.com/" target="_blank">
      <div class="tool">
        <img src="@/assets/images/yarn-icon.png" alt="yarn" />
        <p>yarn</p>
      </div>
    </a>
    <a href="https://babeljs.io/" target="_blank">
      <div class="tool">
        <img src="@/assets/images/babel-icon.png" alt="Babel" />
        <p>Babel</p>
      </div>
    </a>
    <a href="https://www.npmjs.com/" target="_blank">
      <div class="tool">
        <img src="@/assets/images/npm-icon.png" alt="npm" />
        <p>NPM</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ToolsCard',
};
</script>

<style scoped lang="scss">
a {
  color: inherit;
}
.tool {
  display: inline-block;
  margin-right: 2rem;
  text-align: center;
  & > img {
    // width: 3.3125rem;
    height: 3.3125rem;
  }
  & > p {
    font-weight: 500;
  }
}
</style>
