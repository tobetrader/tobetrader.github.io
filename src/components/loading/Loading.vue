<template>
  <div class="loading big">
    <span class="circle1"/>
    <span class="circle2"/>
    <span class="circle3"/>
  </div>
</template>

<style scoped lang="less">
.loading {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  span {
    display: inline-block;
    border-radius: 50%;
    background-color: var(--vp-c-brand);
    animation: scale-anim 0.8s infinite ease-in-out;
  }

  .circle1 {
    animation-delay: -1.2s;
  }

  .circle2 {
    animation-delay: -1s;
  }

  .circle3 {
    animation-delay: -0.8s;
  }

  &.normal {
    span {
      width: 6px;
      height: 6px;
    }
    .circle2 {
      margin: 0 4px;
    }
  }
  &.big {
    span {
      width: 10px;
      height: 10px;
    }
    .circle2 {
      margin: 0 6px;
    }
  }

  @keyframes scale-anim {
    0%, 80%, 100% { 
      transform: scale(1);
    }
    40% { 
      transform: scale(1.2);
    }
  }
}

</style>