<script lang="ts">
  import MainText from "./components/MainText.svelte";
  import { Router, Route, Link } from "svelte-navigator";
  import Donating from "./components/Donating.svelte";

  let innerWidth;
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/dacbc752b2.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<svelte:window bind:innerWidth />

<Router>
  <main>
    {#if innerWidth <= 1180}
      <div class="oops">
        <div class="content" style="width: calc({innerWidth} - 50);">
          <span id="title">Oops</span>
          <p>
            Looks like your screen is too small to fit the content correctly
          </p>
          <p>
            Please move to a bigger screen or enable Desktop mode if you're on
            mobile
          </p>
        </div>
      </div>
    {:else}
      <!-- Creates a ul element with anchors linking to different links -->
      <ul class="navbar">
        <!-- Logo -->
        <li class="navbar-items">
          <Link to="/" class="logo">
            <img src="Logo.png" alt="Logo" width="250px" />
          </Link>
        </li>
        <!-- Download URL -->
        <li class="navbar-items" style="float:right">
          <Link to="donate">Donate</Link>
        </li>
        <!-- Source code -->
        <li class="navbar-items" style="float:right">
          <a href="https://github.com/ProjectBlackPearl"> Source code </a>
        </li>

        <li class="navbar-items" style="float:right">
          <a href="https://projectblackpearl.github.io/wiki"> Wiki </a>
        </li>
        <!-- Join the community (aka: Discord Server) -->
        <li class="navbar-items" style="float:right">
          <a href="https://discord.gg/PbM5AjamNH"> Join the community </a>
        </li>
      </ul>

      <Route path="donate" primary={false}>
        <Donating />
      </Route>
      <Route path="/" primary={false}>
        <MainText />
      </Route>
    {/if}
  </main>
</Router>
