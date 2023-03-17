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
    bc1q0c7kxkr3mh436htjpxhku87nhf859h7ens69zl
    <br /><i class="fa-brands fa-monero" /> Monero:
    4AUjCnbeY5j6yz6xSHtHFuDMYkniHydz3fu48pr3eqUSV8vRjrRTpxgVSHfgp5gJpwiqbxiN7bVixX1YF6bED668LWMqqBX
    <br /><i class="fa-brands fa-ethereum" /> Ethereum:
    0x53550c028f95b6a633D9c0EeaBd4887F013de038
    <br /><i class="fa-solid fa-litecoin-sign" /> Litecoin: Lg9Uim9p3dj2KGy4225x6vMnZXBtr5DneN
  </p>
</div>
