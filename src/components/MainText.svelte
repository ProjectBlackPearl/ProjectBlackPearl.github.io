<script lang="ts">
  let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class="top">
  <div class="background" />
  <div class="content">
    {#if innerWidth <= 641}
      <h1>Unify your game sources<br />in one place</h1>
    {:else}
      <h1>Unify your game sources in one place</h1>
    {/if}
    <div class="downloads">
      <!-- svelte-ignore a11y-no-redundant-roles -->
      <button role="button">
        <i class="fa-brands fa-windows" />
      </button>
      <!-- svelte-ignore a11y-no-redundant-roles -->
      <button role="button">
        <i class="fa-brands fa-apple" />
      </button>
      <!-- svelte-ignore a11y-no-redundant-roles -->
      <button role="button">
        <i class="fa-brands fa-linux" />
      </button>
    </div>
  </div>
</div>

<div class="main-content">
  <article class="what">
    <h1>What is Project Black Pearl</h1>
    {#if innerWidth > 1346}
      <img
        src="https://cdn.discordapp.com/attachments/1031571525972803594/1065267387529695325/Untitled79_20230118192154.png"
        alt="The library section of PBP"
        width="670px"
      />
    {/if}
    <p>
      Project Black Pearl (PBP) is the ultimate solution for managing your
      games, regardless of the source you got them from.
    </p>
    <p>
      With its library store system powered by community-made modules and
      extensions, PBP makes it easy to keep all your games organized in one
      place.
    </p>
    <p>
      PBP is also designed to be highly customizable, with built-in support for
      plugins, language support for over 20 languages, and the ability to
      personalize your experience with theme customization!
    </p>
  </article>

  <article class="features">
    <h1>Features</h1>

    <div class="items">
      <div class="item">
        <i class="fa-solid fa-user-gear" /><br />
        <span>Built in plugin support</span>
      </div>
      <div class="item">
        <i class="fa-brands fa-github" /><br />
        <span>Open source</span>
      </div>
      <div class="item">
        <i class="fa-solid fa-circle-check" /><br />
        <span>Clean and intuitive UI</span>
      </div>
      <div class="item">
        <i class="fa-solid fa-computer" /><br />
        <span>Easy to use on all devices</span>
      </div>
    </div>
  </article>
</div>
