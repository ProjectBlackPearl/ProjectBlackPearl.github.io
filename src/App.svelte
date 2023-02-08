<script lang="ts">
  import MainText from "./components/MainText.svelte";
  import { Router, Route, Link } from "svelte-navigator";
  import Donating from "./components/Donating.svelte";
  import "./app.scss";

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
  {#if innerWidth > 412}
    <main>
      <!-- Creates a ul element with anchors linking to different links -->
      <nav>
        <ul>
          <li>
            <Link to="/" class="home-logo">
              <img class="logo" src="Logo.svg" alt="Logo" width="68px" />
              {#if innerWidth > 925}
                <strong class="logo-text">Project Black Pearl</strong>
              {/if}
            </Link>
          </li>
        </ul>
        {#if innerWidth > 680}
          <ul>
            <!-- Download URL -->
            <li class="navbar-items" style="float:right">
              <button class="nav">
                <Link to="donate">Donate</Link>
              </button>
            </li>
            <!-- Source code -->
            <li class="navbar-items" style="float:right">
              <button class="nav">
                <a href="https://github.com/ProjectBlackPearl"> Source code </a>
              </button>
            </li>

            <li class="navbar-items" style="float:right">
              <button class="nav">
                <a href="https://projectblackpearl.github.io/wiki"> Wiki </a>
              </button>
            </li>
            <!-- Join the community (aka: Discord Server) -->
            <li class="navbar-items" style="float:right">
              <button class="nav">
                <a href="https://discord.gg/VRXcjnuq6m"> Join the community </a>
              </button>
            </li>
          </ul>
        {:else}
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="button" class="dropdown"
              ><i class="fa-solid fa-bars" /></summary
            >
            <ul role="listbox">
              <!-- Download URL -->
              <li class="navbar-items" style="float:right">
                <button class="nav">
                  <Link to="donate" class="no-fucking-hover">Donate</Link>
                </button>
              </li>
              <!-- Source code -->
              <li class="navbar-items" style="float:right">
                <button class="nav">
                  <a
                    href="https://github.com/ProjectBlackPearl"
                    class="no-fucking-hover"
                  >
                    Source code
                  </a>
                </button>
              </li>

              <li class="navbar-items" style="float:right">
                <button class="nav">
                  <a
                    href="https://projectblackpearl.github.io/wiki"
                    class="no-fucking-hover"
                  >
                    Wiki
                  </a>
                </button>
              </li>
              <!-- Join the community (aka: Discord Server) -->
              <li class="navbar-items" style="float:right">
                <button class="nav">
                  <a
                    href="https://discord.gg/VRXcjnuq6m"
                    class="no-fucking-hover"
                  >
                    Join the community
                  </a>
                </button>
              </li>
            </ul>
          </details>
        {/if}
      </nav>

      <Route path="donate" primary={false}>
        <Donating />
      </Route>
      <Route path="/" primary={false}>
        <MainText />
      </Route>
    </main>
  {:else}
    <div class="oops">
      <article>
        <h1>Oops</h1>
        <p>
          Looks like your screen size is too small, please go to an bigger
          screen or enable desktop mode on mobile
        </p>
      </article>
    </div>
  {/if}
</Router>
