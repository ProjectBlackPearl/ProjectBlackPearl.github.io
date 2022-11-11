<svelte:head>
  <script src="https://kit.fontawesome.com/dacbc752b2.js" crossorigin="anonymous"></script>
</svelte:head>

<script lang="ts">
  import MainText from './components/MainText.svelte'
</script>

<main> 
  <!-- Creates a ul element with anchors linking to different links -->
  <ul class="navbar">
    <!-- Logo -->
    <li class="navbar-items">
       <img src="https://cdn.discordapp.com/attachments/922635062602788884/1035922289180557382/Logo.png" alt="Logo" width="250px">
    </li>
    <!-- Download URL (WIP) -->
    <li class="navbar-items" style="float:right">
      <a href="https://github.com/ProjectBlackPearl/ProjectBlackPearl">
        Download
      </a>
    </li>
    <!-- Source code -->
    <li class="navbar-items" style="float:right">
      <a href="https://github.com/ProjectBlackPearl">
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
  <MainText/>
</main>
