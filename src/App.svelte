<svelte:head>
  <script src="https://kit.fontawesome.com/dacbc752b2.js" crossorigin="anonymous"></script>
</svelte:head>

<script lang="ts">
  import { data } from './Database'
  import News from './components/News.svelte'
  import MainText from './components/MainText.svelte'

  // @ts-ignore
  console.log(data.user)

  var page: number;

  function homePage() {
    page = 1
  }

  function newsPage() {
    page = 2
  }
</script>

<main>
  <ul class="navbar border bg">
    <li class="navbar-items">
      <button class="active" on:click={homePage}>
        <i class="fa-solid fa-gamepad"></i> <b>Black Pearl</b>
      </button>
    </li>
    <li class="navbar-items">
      <a href="https://discord.gg/PbM5AjamNH">
        <i class="fa-brands fa-discord"></i> Discord
      </a>
    </li>
    <li class="navbar-items">
      <a href="https://github.com/Project-Black-Pearl">
        <i class="fa-brands fa-github"></i> Github
      </a>
    </li>
    <li class="navbar-items">
      <button class="active" on:click={newsPage}>
        <i class="fa-solid fa-newspaper"></i> <b>News</b>
      </button>
    </li>
  </ul>

  {#if page === 1}
    <MainText/>
  {:else if page === 2}
    <News/>
  {:else}
    <MainText/>
  {/if}
</main>