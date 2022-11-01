<svelte:head>
  <script src="https://kit.fontawesome.com/dacbc752b2.js" crossorigin="anonymous"></script>
</svelte:head>

<script lang="ts">
  // Imports
  import { data } from './Database'
  import News from './components/News.svelte'
  import MainText from './components/MainText.svelte'
  import FAQ from "./components/FAQ.svelte"

  // @ts-ignore
  console.log(data.user)

  // Defines a variable for the page index
  var page: number;

  // Updates the index from 1 - 3
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
  <!-- Creates a ul element with anchors linking to different links -->
  <ul class="navbar bg">
    <!-- Logo -->
    <li class="navbar-items">
       <img src="https://cdn.discordapp.com/attachments/922635062602788884/1035922289180557382/Logo.png" alt="Logo" width="250px">
    </li>
    <!-- Download URL (WIP) -->
    <li class="navbar-items" style="float:right">
      <a href="https://github.com/Project-Black-Pearl">
        Download
      </a>
    </li>
    <!-- Source code -->
    <li class="navbar-items" style="float:right">
      <a href="https://github.com/Project-Black-Pearl">
        Source code
      </a>
    </li>
    <!-- Join the community (aka: Discord Server) -->
    <li class="navbar-items" style="float:right">
      <a href="https://discord.gg/PbM5AjamNH">
        Join the community
      </a>
    </li>
  </ul>

  {#if page === 1}
    <MainText/>
  {:else if page === 2}
    <News/>
  {:else if page === 3}
    <FAQ/>
  {:else}
    <MainText/>
  {/if}
</main>