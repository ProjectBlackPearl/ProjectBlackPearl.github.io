<script>
  let innerWidth;
</script>

<svelte:window bind:innerWidth />

<article class="donating">
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
    <div class="wallets" />
  </div>
</article>
