class NavMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="right hide-on-med-and-down">
        <ul>
            <li><a class="waves-effect" href="#favorite">Favorite Team</a></li>
            <li><a class="waves-effect" href="#bookmark">Match Bookmark</a></li>
            <!--dropdown Menu-->
            <li><a class="dropdown-trigger" data-target="itsdropdown"><i class="material-icons">expand_more</i></a></li>
        </ul>
        <ul class="dropdown-content" id="itsdropdown">
            <li><a class="waves-effect" href="#standings"><i class="material-icons">leaderboard</i>Standings</a></li>
            <li class="divider"></li>
            <li><a class="waves-effect" href="#team"><i class="material-icons">people_outline</i>Team</a></li>
            <li class="divider"></li>
            <li><a class="waves-effect" href="#match"><i class="material-icons">emoji_events</i>Match</a></li>
        </ul>
    </div>
    <div class="hide-on-large-only sidenav" id="itssidenav">
        <ul>
            <li>
                <div class="user-view">
                    <a><img src="/assets/images/pl-badge.png"></a>
                    <a><span class="black-text center name">Created by Mochammad Arrafie</span></a>
                </div>
            </li>
        </ul>
        <ul>
            <li><div class="divider"></div></li>
            <li><a class="waves-effect" href="#favorite"><i class="material-icons">star</i>Favorite Team</a></li>
            <li><a class="waves-effect" href="#bookmark"><i class="material-icons">bookmark</i>Match Bookmark</a></li>
            <li><div class="divider"></div></li>
            <li><a class="waves-effect" href="#standings"><i class="material-icons">leaderboard</i>Standings</a></li>
            <li><a class="waves-effect" href="#team"><i class="material-icons">people</i>Team</a></li>
            <li><a class="waves-effect" href="#match"><i class="material-icons">emoji_events</i>Match</a></li>
        </ul>
        <ul>
            <li>
                <div class="user-view">
                    <div class="divider"></div>
                    <a><span class="black-text center name">© 2020</span></a>
                </div>
            </li>
        </ul>
    </div>`;
  }
}
customElements.define("nav-component", NavMenu);
