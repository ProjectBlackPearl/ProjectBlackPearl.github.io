<script>
  let innerWidth;
  import { copy } from "svelte-copy";
  import Clipboard from "svelte-clipboard";
</script>

<svelte:window bind:innerWidth />

<article class="donating">
  <!-- 850 
  
            use:copy={{
            text: "bc1qhmjt2vz72gxxeqmh4sah24j67lzpvum945c5eq",
            events: ["click"],
          }}-->
  {#if innerWidth <= 850}
    <div class="content">
      <h1>Donating</h1>
      <p style="width: calc({innerWidth} - 50)">
        If you would to support the project, you can donate to any of the
        following wallets:
      </p>
      <p class="wallets-btn">
        <Clipboard text="bc1qhmjt2vz72gxxeqmh4sah24j67lzpvum945c5eq" let:copy>
          <button on:click={copy} role="button"
            ><i class="fa-brands fa-bitcoin" />
            Bitcoin</button
          ><br />
        </Clipboard>
        <Clipboard
          text="47d6EAGzmMb4ofL1fRgYaM4TDvjigcQfe5t64JLez97fJrrSoJvBwJLHzpVayWJUScE4WLcF79pdGQRWuPSPdMqT1MdXGjG"
          let:copy
        >
          <button on:click={copy} role="button"
            ><i class="fa-brands fa-monero" />
            Monero</button
          ><br />
        </Clipboard>
        <Clipboard text="0x76a1e6A87Abb8Cd2AA1811E489b0C67d00DAdB3f" let:copy>
          <button on:click={copy} role="button"
            ><i class="fa-brands fa-ethereum" />
            Ethereum</button
          ><br />
        </Clipboard>
        <Clipboard text="LZbyxofFgXBBRQJKu5MsLT8cdf418WaVuk" let:copy>
          <button on:click={copy} role="button"
            ><i class="fa-solid fa-litecoin-sign" />
            Litecoin</button
          ><br />
        </Clipboard>
      </p>
      <p>
        All donations will go toward operating costs and supporting the Project
        Black Pearl team.
      </p>
      <p>
        <b> NOTE: </b> If you would like to be given the Epic Donators role on Discord
        and have your name added to the list of donators, please DM Terrence#9699,
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
        bc1qhmjt2vz72gxxeqmh4sah24j67lzpvum945c5eq <br />
        <i class="fa-brands fa-monero" /> Monero:
        47d6EAGzmMb4ofL1fRgYaM4TDvjigcQfe5t64JLez97fJrrSoJvBwJLHzpVayWJUScE4WLcF79pdGQRWuPSPdMqT1MdXGjG
        <br />
        <i class="fa-brands fa-ethereum" /> Ethereum:
        0x76a1e6A87Abb8Cd2AA1811E489b0C67d00DAdB3f <br />
        <i class="fa-solid fa-litecoin-sign" /> Litecoin: LZbyxofFgXBBRQJKu5MsLT8cdf418WaVuk
      </p>
      <p>
        All donations will go toward operating costs and supporting the Project
        Black Pearl team.
      </p>
      <p>
        <b> NOTE: </b> If you would like to be given the Epic Donators role on Discord
        and have your name added to the list of donators, please DM Terrence#9699,
        Q99#1628 or AX200M#9061 on Discord with proof of your donation
      </p>
    </div>
  {/if}
</article>
