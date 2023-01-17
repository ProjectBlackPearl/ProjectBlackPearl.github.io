<script>
  let innerWidth;
</script>

<svelte:window bind:innerWidth />

<div class="donating">
  <h1>Donations</h1>

  <p style="width: calc({innerWidth} - 50)">
    If you would to support the project, you can donate to any of the following
    wallets. All donations will go toward operating costs and supporting the
    Project Black Pearl team.
    <br />NOTE: If you would like to be given the Epic Donators role on Discord
    and have your name added to the list of donators, please DM Terrence#9699 on
    Discord with proof of your donation.
    <br /><i class="fa-brands fa-bitcoin" /> Bitcoin:
    bc1qhmjt2vz72gxxeqmh4sah24j67lzpvum945c5eq
    <br /><i class="fa-brands fa-monero" /> Monero:
    47d6EAGzmMb4ofL1fRgYaM4TDvjigcQfe5t64JLez97fJrrSoJvBwJLHzpVayWJUScE4WLcF79pdGQRWuPSPdMqT1MdXGjG
    <br /><i class="fa-brands fa-ethereum" /> Ethereum:
    0x76a1e6A87Abb8Cd2AA1811E489b0C67d00DAdB3f
    <br /><i class="fa-solid fa-litecoin-sign" /> Litecoin: LZbyxofFgXBBRQJKu5MsLT8cdf418WaVuk
  </p>
</div>
