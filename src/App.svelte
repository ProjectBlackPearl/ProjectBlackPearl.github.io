<script lang="ts">
  import MainText from "./components/MainText.svelte";
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/dacbc752b2.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<main>
  <!-- Creates a ul element with anchors linking to different links -->
  <ul class="navbar">
    <!-- Logo -->
    <li class="navbar-items">
      <img src="Logo.png" alt="Logo" width="250px" />
    </li>
    <!-- Download URL -->
    <li class="navbar-items" style="float:right">
      <a href="https://github.com/ProjectBlackPearl/pbpl"> Download </a>
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
  <MainText />
</main>
