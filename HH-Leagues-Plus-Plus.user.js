// ==UserScript==
// @name         HH Leagues++
// @version      0.13.0
// @description  Upgrade League with various features
// @author       -MM-
// @match        https://*.hentaiheroes.com/leagues.html*
// @match        https://nutaku.haremheroes.com/leagues.html*
// @match        https://*.comixharem.com/leagues.html*
// @match        https://*.pornstarharem.com/leagues.html*
// @match        https://*.gayharem.com/leagues.html*
// @match        https://*.gaypornstarharem.com/leagues.html*
// @match        https://*.transpornstarharem.com/leagues.html*
// @match        https://*.hornyheroes.com/leagues.html*
// @run-at       document-end
// @namespace    https://github.com/HH-GAME-MM/HH-Leagues-Plus-Plus
// @updateURL    https://github.com/HH-GAME-MM/HH-Leagues-Plus-Plus/raw/main/HH-Leagues-Plus-Plus.user.js
// @downloadURL  https://github.com/HH-GAME-MM/HH-Leagues-Plus-Plus/raw/main/HH-Leagues-Plus-Plus.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hentaiheroes.com
// @grant        none
// ==/UserScript==

//CHANGELOG: https://github.com/HH-GAME-MM/HH-Leagues-Plus-Plus/raw/main/CHANGELOG.md

(function() {
"use strict";function TowerOfFame_css(){let e=document.createElement("style");document.head.appendChild(e),e.sheet.insertRule("#leagues .league_content .league_buttons .league_buttons_block .multiple-battles { min-width: 6.7rem; min-height: 54px; margin-right: 10px; }"),e.sheet.insertRule("#leagues .league_content .league_buttons .change_team_container #change_team { min-width: 6.7rem; height: 54px; }"),e.sheet.insertRule("#leagues .league_content .league_buttons .change_team_container #change_team div { height: 100%; display: flex; justify-content: center; align-items: center; }"),e.sheet.insertRule("#leagues .league_content .league_buttons .league_end_in div p { max-width: 6.5rem; line-height: 1; }"),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="team"] { column-gap: 3px; }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="team"] .team-theme.icon { width: 20px; height: 20px; }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="nickname"].clubmate .nickname { color: #00CC00; }'),e.sheet.insertRule("#leagues .league_content { max-width: 49rem !important; }"),e.sheet.insertRule("#leagues .league_table .data-list .data-row.body-row.selected { background-color: rgb(158, 108, 37); }"),e.sheet.insertRule("#leagues .league_table .data-list .data-row.body-row.player-row.selected { text-shadow: rgb(0, 0, 0) 1px 1px 0px, rgb(0, 0, 0) -1px 1px 0px, rgb(0, 0, 0) -1px -1px 0px, rgb(0, 0, 0) 1px -1px 0px; }"),e.sheet.insertRule('#leagues .league_table .data-list .data-row.body-row.player-row.selected .data-column[column="boosters"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .data-column[column="team"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .data-column[column="value"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .head-column[column="boosters"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .head-column[column="team"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .head-column[column="value"] {\n                                  transition: none;\n                              }'),e.sheet.insertRule("#leagues .league_table .nicescroll-rails {right:15rem !important}"),e.sheet.insertRule("#leagues .league_opponent .player_team_block.opponent {padding-left:0.75rem !important;padding-right:0.75rem !important}"),e.sheet.insertRule("#leagues .league_opponent .player-panel-buttons {flex-direction: row !important}"),e.sheet.insertRule("#leagues .league_opponent .player-panel-buttons .battle-action-button.green_button_L {min-width: 50%}"),e.sheet.insertRule("#leagues .league_opponent .player-profile-picture {cursor:pointer !important}"),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="level"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="level"],\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="place"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="place"] {\n                                  min-width: 1.4rem !important;\n                              }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="player_league_points"],\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="power"],\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="team"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="player_league_points"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="power"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="team"] {\n                                  min-width: 2rem !important;\n                              }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="match_history"],\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="match_history_sorting"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="match_history"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="match_history_sorting"] {\n                                  min-width: 5.2rem !important;\n                              }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="match_history"] .result,\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="match_history_sorting"] .result,\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="match_history"] .result,\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="match_history_sorting"] .result {\n                                  width: 1.7rem !important;\n                                  height: 1.7rem !important;\n                                  line-height: 1.7rem !important;\n                              }'),e.sheet.insertRule("#leagues .league_opponent.hidden_girl {\n                                  position: absolute;\n                                  right: 0;\n                                  top: 0;\n                                  height: 100%;\n                                  width: 15rem;\n                                  transition: all .5s;\n                                  opacity: 1;\n                                  padding-top: 10px;\n                              }"),e.sheet.insertRule("#leagues .league_opponent {\n                                  position: absolute;\n                                  opacity: 0;\n                                  right: -13rem;\n                                  width: 15rem;\n                                  min-width: 13rem;\n                                  padding-top: 10px;\n                              }"),e.sheet.insertRule("#leagues .matchRating { display: block; }"),e.sheet.insertRule("#leagues .league_opponent .matchRating-win-chance { margin-top: 5px; }"),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="power"] .matchRating .matchRating-value { font-size: 12px; }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="power"] .matchRating .matchRating-label { display: none; }')}function TowerOfFame_run(){if(null===document.querySelector("#leagues div.league_girl"))return void setTimeout(TowerOfFame_run,50);let e=null,t=document.querySelector("#leagues .league_content .league_buttons .league_buttons_block .blue_button_L, #leagues .league_content .league_buttons .league_buttons_block .orange_button_L");null!==t&&(t.parentNode.replaceChild(t.cloneNode(!0),t),$(".multiple-battles").on("click",(function(){if(confirm("Perform 15x?")){$(this).blur();var e=function(){return ajaxBattle("challenge",{action:"do_battles_leagues",number_of_battles:15})},t=$(this).attr("price");hc_confirm(t,e)}})));const a=document.createElement("div");a.setAttribute("class","league_opponent"),document.querySelector("#leagues").appendChild(a);const l=document.querySelector("#leagues div.league_girl");function n(){l.classList.contains("hidden_girl")?a.classList.add("hidden_girl"):a.classList.remove("hidden_girl")}new MutationObserver((e=>{e.forEach((e=>{"attributes"===e.type&&"class"===e.attributeName&&n()}))})).observe(l,{attributes:!0}),n(),$(".head-column").click(u),u();let o=localStorage.getItem("HHLeaguesPlusPlusLastOpponentId");if(null!==o){let e=m(o),t=g(o);null!==e&&null!==t&&r(t,e)}function u(){let t=document.querySelectorAll("#leagues .league_table .data-list .data-row.body-row");for(let a=0;a<t.length;a++){let l=t[a],n=parseInt(l.querySelector('.data-column[column="nickname"] .nickname').getAttribute("id-member")),o=m(n);Hero.infos.id!==n&&null!==Hero.club&&null!==o.player.club&&Hero.club.id_club==o.player.club.id_club&&l.querySelector('.data-column[column="nickname"]').classList.add("clubmate");let u=l.querySelector('.data-column[column="can_fight"] .go_pre_battle');null!==u&&(u.classList.remove("go_pre_battle"),u.addEventListener("click",(function(){loadingAnimation.start()}))),l.addEventListener("click",(e=>r(e.currentTarget,o))),e===o&&l.classList.add("selected")}}function r(e,t){var a;document.querySelectorAll("#leagues .league_table .data-list .data-row.body-row").forEach((e=>e.classList.remove("selected"))),e.classList.add("selected"),i(t),function(){let e=document.getElementById("toggle_columns");null===e||e.classList.contains("hidden_girl")||e.click()}(),a=t.player.id_fighter,localStorage.setItem("HHLeaguesPlusPlusLastOpponentId",a)}function i(t){e=t;let a=$("#leagues .league_opponent");a[0].innerHTML="";let l=t.rewards,n=t.match_history;delete t.rewards,delete t.match_history,buildPlayerBlock(t,!1,a),t.rewards=l,t.match_history=n,document.querySelector("#leagues .league_opponent .player-profile-picture").addEventListener("click",(e=>{hero_page_popup({id:t.player.id_fighter})}));let o=function(e){let t=0;if(!1!==e.match_history[parseInt(e.player.id_fighter)])for(let a=0;a<3;a++)null===e.match_history[parseInt(e.player.id_fighter)][a]&&t++;return t}(t),u=document.querySelector("#leagues .league_opponent .player-panel-buttons"),r=document.createElement("div"),i=document.createElement("div");r.setAttribute("class","green_button_L battle-action-button league-single-battle-button"),i.setAttribute("class","green_button_L battle-action-button league-multiple-battle-button"),r.innerHTML=c(1),i.innerHTML=c(o>1?o:3),o>0?r.addEventListener("click",(e=>s(r,i,t,1))):r.setAttribute("disabled","disabled"),o>1?i.addEventListener("click",(e=>s(r,i,t,o))):i.setAttribute("disabled","disabled"),u.appendChild(r),u.appendChild(i),function(e,t){if(!window.HHPlusPlus)return;if(e.sim)(new window.HHPlusPlus.League).display(e.sim);else{window.hero_data=m(Hero.infos.id).player,window.opponent_fighter=e;let t=new window.HHPlusPlus.League;const{player:a,opponent:l}=t.extract(),n=new window.HHPlusPlus.Simulator({player:a,opponent:l}).run();t.display(n),document.querySelectorAll("#leagues .league_opponent .matchRating-value").forEach((function(e){e.innerHTML="! "+e.innerHTML+" !"}))}}(t)}function s(e,t,a,l){if(Hero.energies.challenge.amount>=l){e.setAttribute("disabled","disabled"),t.setAttribute("disabled","disabled");const n=e.cloneNode(!0),o=t.cloneNode(!0);e.parentNode.replaceChild(n,e),t.parentNode.replaceChild(o,t),e=n,t=o,loadingAnimation.start(),$.ajax({url:"/leagues-pre-battle.html?id_opponent="+a.player.id_fighter,success:function(n){window.history.replaceState(null,"",1===l?"/league-battle.html?number_of_battles=1&id_opponent="+a.player.id_fighter:"/leagues-pre-battle.html?id_opponent="+a.player.id_fighter);let o={action:"do_battles_leagues",id_opponent:a.player.id_fighter,number_of_battles:l};hh_ajax(o,(function(n){window.history.replaceState(null,"","/leagues.html"),n.rewards.redirectUrl="",loadingAnimation.stop(),function(e){if(!e.lose){const e=document.querySelector("#reward_holder");null!==e&&e.setAttribute("style","")}Reward.handlePopup(e)}(n.rewards),Hero.updates(n.hero_changes);let o=0;for(const e of n.rewards.data.rewards)if("battle_lost"===e.type){o=e.value;break}const u=function(e,t,a,l){let n=0;3===t&&l>73||2===t&&l>48?n=25:(3===t&&l<11||2===t&&l<8)&&(n=3);let o=3;if(!1!==e.match_history[parseInt(e.player.id_fighter)]){let u="";for(let r=0;r<3;r++){let i=e.match_history[parseInt(e.player.id_fighter)][r];if(null===i&&0!==t){let o,u;t>1?(o=a>2-r?"lost":"won",u="?",0!==n&&(r<2?(u=n.toString(),l-=n):u=l.toString())):(o=1===a?"lost":"won",u=l.toString(),t=0),i=e.match_history[parseInt(e.player.id_fighter)][r]={attacker_won:o,match_points:u}}null!==i?(o--,u+='<div class="result '+i.attacker_won+'">'+i.match_points+"</div>"):u+='<div class="result"></div>'}if(d(e.player.id_fighter,"match_history_sorting").innerHTML=u,0===o){let t=d(e.player.id_fighter,"can_fight");t.innerHTML="",t.parentNode.replaceChild(t.cloneNode(!0),t)}return o}}(a,l,o,n.rewards.heroChangesUpdate.league_points);u>0&&(e.removeAttribute("disabled"),e.addEventListener("click",(l=>s(e,t,a,1))),u>1&&(t.innerHTML=c(u),t.removeAttribute("disabled"),t.addEventListener("click",(l=>s(e,t,a,u)))))}))}})}else HHPopupManager.show("no_energy_challenge",{energy:"challenge",needed:l-Hero.energies.challenge.amount},(()=>s(e,t,a,l)))}function c(e){return'<div class="action-label">Challenge!</div><div class="action-cost"><div><span class="energy_challenge_icn"></span> x'+e+"</div></div>"}function d(e,t){return g(e).querySelector('.data-column[column="'+t+'"]')}function g(e){let t=document.querySelector('#leagues .league_table .data-list .data-row .data-column[column="nickname"] .nickname[id-member="'+e+'"]');return null!==t?t.parentNode.parentNode:null}function m(e){for(let t=0;t<opponents_list.length;t++)if(opponents_list[t].player.id_fighter==e)return opponents_list[t];return null}$(document).on("league:sim-done",(function(){null!==e&&i(e)}))}TowerOfFame_css(),setTimeout(TowerOfFame_run,1);
})();
