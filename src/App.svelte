<svelte:head>
  <script src="https://kit.fontawesome.com/dacbc752b2.js" crossorigin="anonymous"></script>
</svelte:head>

<script lang="ts">
  import { data } from './Database'
  import News from './components/News.svelte'
  import MainText from './components/MainText.svelte'
  import FAQ from "./components/FAQ.svelte"

  console.log(data.user)

  var page: number;

  function homePage() {
    page = 1
  }

  function newsPage() {
    page = 2
  }

  function faqPage() {
    page = 3
  }
</script>
<main>
  <div id="Sidebar" class="sidebar">
    <button id="item-1" class="spg" on:click={homePage}>
      <img src="https://media.discordapp.net/attachments/922635062602788884/1035922289180557382/Logo.png?width=871&height=289" alt="" width="270">
    </button>
    <button id="item-2" class="spg" on:click={newsPage}>
      News
    </button>
    <button id="item-3" class="spg" on:click={faqPage}>
      FAQ
    </button>
    <a id="item-4" class="spg" href="https://discord.gg/PbM5AjamNH">
      Discord
    </a>
    <a id="item-5" class="spg" href="https://github.com/Project-Black-Pearl">
      GitHub
    </a>
  </div>

  <div class="main-content">
    {#if page === 1}
      <MainText/>
    {:else if page === 2}
      <News/>
    {:else if page === 3}
      <FAQ/>
    {:else}
      <MainText/>
    {/if}
  </div>
</main>