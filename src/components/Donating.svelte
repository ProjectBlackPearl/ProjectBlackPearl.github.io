<script>
  let innerWidth;
  import Clipboard from "svelte-clipboard";
</script>

<svelte:window bind:innerWidth />

<div class="center">
  <article class="donating">
    {#if innerWidth <= 1129}
      <div class="content">
        <h1>Donating</h1>
        <p style="width: calc({innerWidth} - 50)">
          If you would like to support the project, you can donate to any of the
          following wallets:
        </p>
        <p class="wallets-btn">
          <Clipboard text="bc1q0c7kxkr3mh436htjpxhku87nhf859h7ens69zl" let:copy>
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <button on:click={copy} role="button"
              ><i class="fa-brands fa-bitcoin" />
              Bitcoin</button
            ><br />
          </Clipboard>
          <Clipboard
            text="4AUjCnbeY5j6yz6xSHtHFuDMYkniHydz3fu48pr3eqUSV8vRjrRTpxgVSHfgp5gJpwiqbxiN7bVixX1YF6bED668LWMqqBX"
            let:copy
          >
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <button on:click={copy} role="button"
              ><i class="fa-brands fa-monero" />
              Monero</button
            ><br />
          </Clipboard>
          <Clipboard text="0x53550c028f95b6a633D9c0EeaBd4887F013de038" let:copy>
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <button on:click={copy} role="button"
              ><i class="fa-brands fa-ethereum" />
              Ethereum</button
            ><br />
          </Clipboard>
          <Clipboard text="Lg9Uim9p3dj2KGy4225x6vMnZXBtr5DneN" let:copy>
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <button on:click={copy} role="button"
              ><i class="fa-solid fa-litecoin-sign" />
              Litecoin</button
            ><br />
          </Clipboard>
        </p>
        <p>
          All donations will go toward operating costs and supporting the
          Project Black Pearl team.
        </p>
        <p>
          <b> NOTE: </b> If you would like to be given the Epic Donators role on
          Discord and have your name added to the list of donators, please DM Terrence#9699,
          Q99#1628 or AX200M#9061 on Discord with proof of your donation
        </p>
        <sub>Hint: Click the buttons to copy to the clipboard</sub>
      </div>
    {:else}
      <div class="content">
        <h1>Donating</h1>
        <p style="width: calc({innerWidth} - 50)">
          If you would to support the project, you can donate to any of the
          following wallets:
        </p>
        <p class="wallets">
          <i class="fa-brands fa-bitcoin" /> Bitcoin:
          bc1q0c7kxkr3mh436htjpxhku87nhf859h7ens69zl <br />
          <i class="fa-brands fa-monero" /> Monero:
          4AUjCnbeY5j6yz6xSHtHFuDMYkniHydz3fu48pr3eqUSV8vRjrRTpxgVSHfgp5gJpwiqbxiN7bVixX1YF6bED668LWMqqBX
          <br />
          <i class="fa-brands fa-ethereum" /> Ethereum:
          0x53550c028f95b6a633D9c0EeaBd4887F013de038 <br />
          <i class="fa-solid fa-litecoin-sign" /> Litecoin: Lg9Uim9p3dj2KGy4225x6vMnZXBtr5DneN
        </p>
        <p>
          All donations will go toward operating costs and supporting the
          Project Black Pearl team.
        </p>
        <p>
          <b> NOTE: </b> If you would like to be given the Epic Donators role on
          Discord and have your name added to the list of donators, please DM Terrence#9699,
          Q99#1628 or AX200M#9061 on Discord with proof of your donation
        </p>
      </div>
    {/if}
  </article>
</div>
