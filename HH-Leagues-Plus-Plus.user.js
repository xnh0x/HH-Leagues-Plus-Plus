// ==UserScript==
// @name         HH Leagues++
// @version      0.16.3
// @description  Upgrade League with various features
// @author       -MM-
// @match        https://*.hentaiheroes.com/leagues.html*
// @match        https://*.hentaiheroes.com/home.html*
// @match        https://*.hentaiheroes.com/leagues-pre-battle.html*
// @match        https://nutaku.haremheroes.com/leagues.html*
// @match        https://nutaku.haremheroes.com/home.html*
// @match        https://nutaku.haremheroes.com/leagues-pre-battle.html*
// @match        https://*.comixharem.com/leagues.html*
// @match        https://*.comixharem.com/home.html*
// @match        https://*.comixharem.com/leagues-pre-battle.html*
// @match        https://*.pornstarharem.com/leagues.html*
// @match        https://*.pornstarharem.com/home.html*
// @match        https://*.pornstarharem.com/leagues-pre-battle.html*
// @match        https://*.gayharem.com/leagues.html*
// @match        https://*.gayharem.com/home.html*
// @match        https://*.gayharem.com/leagues-pre-battle.html*
// @match        https://*.gaypornstarharem.com/leagues.html*
// @match        https://*.gaypornstarharem.com/home.html*
// @match        https://*.gaypornstarharem.com/leagues-pre-battle.html*
// @match        https://*.transpornstarharem.com/leagues.html*
// @match        https://*.transpornstarharem.com/home.html*
// @match        https://*.transpornstarharem.com/leagues-pre-battle.html*
// @match        https://*.hornyheroes.com/leagues.html*
// @match        https://*.hornyheroes.com/home.html*
// @match        https://*.hornyheroes.com/leagues-pre-battle.html*
// @run-at       document-end
// @namespace    https://github.com/HH-GAME-MM/HH-Leagues-Plus-Plus
// @updateURL    https://github.com/HH-GAME-MM/HH-Leagues-Plus-Plus/raw/main/HH-Leagues-Plus-Plus.user.js
// @downloadURL  https://github.com/HH-GAME-MM/HH-Leagues-Plus-Plus/raw/main/HH-Leagues-Plus-Plus.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hentaiheroes.com
// @grant        GM_info
// @grant        unsafeWindow
// ==/UserScript==

//CHANGELOG: https://github.com/HH-GAME-MM/HH-Leagues-Plus-Plus/raw/main/CHANGELOG.md

(function(window) {
"use strict";console.log(GM_info.script.name+" Script v"+GM_info.script.version);const Hero=window.Hero?window.Hero:shared.Hero,hh_ajax=window.hh_ajax?window.hh_ajax:shared.general.hh_ajax,ajaxBattle=window.ajaxBattle?window.ajaxBattle:shared.general.ajaxBattle,loadingAnimation=window.loadingAnimation?window.loadingAnimation:shared.animations.loadingAnimation,HHPopupManager=window.HHPopupManager?window.HHPopupManager:shared.popups_manager.HHPopupManager,objectivePopup=window.objectivePopup?window.objectivePopup:shared.general.objectivePopup,hero_page_popup=window.hero_page_popup?window.hero_page_popup:shared.general.hero_page_popup,Reward=window.Reward?window.Reward:shared.reward_popup.Reward,buildPlayerBlock=window.buildPlayerBlock?window.buildPlayerBlock:shared.team_block_builder.buildPlayerBlock,hc_confirm=window.hc_confirm?window.hc_confirm:shared.general.hc_confirm,getSessionId=window.getSessionId?window.getSessionId:()=>new URLSearchParams(window.location.search).get("sess"),config=loadConfig();function Leagues_css(){let e=document.createElement("style");document.head.appendChild(e),config.ChallengeX3ButtonEnabled||(e.sheet.insertRule("#leagues .league_opponent .player-panel-buttons .league-multiple-battle-button { display:none !important; }"),e.sheet.insertRule("#leagues .league_opponent .player-panel-buttons .league-single-battle-button { width: 75% }")),e.sheet.insertRule("#leagues .league_content .league_buttons .league_buttons_block .multiple-battles { min-width: 6.7rem; min-height: 54px; margin-right: 10px; }"),e.sheet.insertRule("#leagues .league_content .league_buttons .change_team_container #change_team { min-width: 6.7rem; height: 54px; }"),e.sheet.insertRule("#leagues .league_content .league_buttons .change_team_container #change_team div { height: 100%; display: flex; justify-content: center; align-items: center; }"),e.sheet.insertRule("#leagues .league_content .league_buttons .league_end_in div p { max-width: 6.5rem; line-height: 1; }"),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="team"] { column-gap: 3px; }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="team"] .team-theme.icon { width: 20px; height: 20px; }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="nickname"].clubmate .nickname { color: #00CC00; }'),e.sheet.insertRule("#leagues .league_content { max-width: 49rem !important; }"),e.sheet.insertRule("#leagues .league_table .data-list .data-row.body-row.selected { background-color: rgb(158, 108, 37); }"),e.sheet.insertRule("#leagues .league_table .data-list .data-row.body-row.player-row.selected { text-shadow: rgb(0, 0, 0) 1px 1px 0px, rgb(0, 0, 0) -1px 1px 0px, rgb(0, 0, 0) -1px -1px 0px, rgb(0, 0, 0) 1px -1px 0px; }"),e.sheet.insertRule('#leagues .league_table .data-list .data-row.body-row.player-row.selected .data-column[column="boosters"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .data-column[column="team"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .data-column[column="value"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .head-column[column="boosters"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .head-column[column="team"],\n                              #leagues .league_table .data-list .data-row.body-row.player-row.selected .head-column[column="value"] {\n                                  transition: none;\n                              }'),e.sheet.insertRule("#leagues .league_opponent .player_team_block.opponent {padding-left:0.75rem !important;padding-right:0.75rem !important; margin-top:-10px !important;height:508px !important;border-radius: .4rem !important;}"),e.sheet.insertRule("#leagues .league_opponent .player-panel-buttons {flex-direction: row !important; justify-content: center !important;}"),e.sheet.insertRule("#leagues .league_opponent .player-panel-buttons .battle-action-button.green_button_L {min-width: 50%}"),e.sheet.insertRule("#leagues .league_opponent .player-profile-picture {cursor:pointer !important}"),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="level"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="level"],\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="place"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="place"] {\n                                  min-width: 1.4rem !important;\n                              }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="player_league_points"],\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="power"],\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="team"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="player_league_points"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="power"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="team"] {\n                                  min-width: 2rem !important;\n                              }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="match_history"],\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="match_history_sorting"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="match_history"],\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="match_history_sorting"] {\n                                  min-width: 5.2rem !important;\n                              }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="match_history"] .result,\n                              #leagues .league_content .league_table .data-list .data-row .data-column[column="match_history_sorting"] .result,\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="match_history"] .result,\n                              #leagues .league_content .league_table .data-list .data-row .head-column[column="match_history_sorting"] .result {\n                                  width: 1.7rem !important;\n                                  height: 1.7rem !important;\n                                  line-height: 1.7rem !important;\n                              }'),e.sheet.insertRule("#leagues .league_content .league_table .data-list {\n                                  overflow: hidden\n                              }"),e.sheet.insertRule("#leagues .league_opponent.hidden_girl {\n                                  position: absolute;\n                                  right: 0;\n                                  top: 0;\n                                  height: 100%;\n                                  width: 15rem;\n                                  transition: all .5s;\n                                  opacity: 1;\n                                  padding-top: 10px;\n                              }"),e.sheet.insertRule("#leagues .league_opponent {\n                                  position: absolute;\n                                  opacity: 0;\n                                  right: -13rem;\n                                  width: 15rem;\n                                  min-width: 13rem;\n                                  padding-top: 10px;\n                              }"),config.RemoveChallengeColumn&&(e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="can_fight"], #leagues .league_content .league_table .data-list .data-row .head-column[column="can_fight"] {\n                                      display: none;\n                                  }'),e.sheet.insertRule('#leagues .league_content.hidden_girl .league_table .data-list .data-row .data-column[column="boosters"], #leagues .league_content.hidden_girl .league_table .data-list .data-row .head-column[column="boosters"] {\n                                      min-width: 13.2rem;\n                                  }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row.body-row.player-row .data-column[column="match_history_sorting"] .player-pin img {\n                                      width: 1.5rem;\n                                      transform: scaleX(-1);\n                                  }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row.body-row.player-row .data-column[column="match_history_sorting"] .player-pin {\n                                      opacity: .5;\n                                  }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row.body-row.player-row .data-column[column="match_history_sorting"] .player-pin.pinned {\n                                      opacity: 1;\n                                  }')),e.sheet.insertRule("#leagues .matchRating { display: block !important; }"),e.sheet.insertRule("#leagues .league_opponent .matchRating-win-chance { margin-top: 5px; }"),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="power"] .matchRating .matchRating-value { font-size: 12px; }'),e.sheet.insertRule('#leagues .league_content .league_table .data-list .data-row .data-column[column="power"] .matchRating .matchRating-label { display: none; }')}function Leagues_run(){if(null===document.querySelector("#leagues div.league_girl"))return void setTimeout(Leagues_run,50);let e=null,t=document.querySelector("#leagues .league_content .league_buttons .league_buttons_block .blue_button_L, #leagues .league_content .league_buttons .league_buttons_block .orange_button_L");null!==t&&(t.parentNode.replaceChild(t.cloneNode(!0),t),$(".multiple-battles").on("click",(function(){if(confirm("Perform 15x?")){$(this).blur();var e=function(){return ajaxBattle("challenge",{action:"do_battles_leagues",number_of_battles:15})},t=$(this).attr("price");hc_confirm(t,e)}})));const a=document.createElement("div");a.setAttribute("class","league_opponent"),document.querySelector("#leagues").appendChild(a);const l=document.querySelector("#leagues div.league_girl");function n(){l.classList.contains("hidden_girl")?a.classList.add("hidden_girl"):a.classList.remove("hidden_girl")}new MutationObserver((e=>{e.forEach((e=>{"attributes"===e.type&&"class"===e.attributeName&&n()}))})).observe(l,{attributes:!0}),n(),$(".head-column").click(u),u();let o=localStorage.getItem("HHLeaguesPlusPlusLastOpponentId");if(null!==o){let e=p(o),t=g(o);null!==e&&null!==t&&i(t,e)}function u(){let t=document.querySelectorAll("#leagues .league_table .data-list .data-row.body-row");for(let a=0;a<t.length;a++){let l=t[a],n=parseInt(l.querySelector('.data-column[column="nickname"] .nickname').getAttribute("id-member")),o=p(n);Hero.infos.id!==n&&null!==Hero.club&&null!==o.player.club&&Hero.club.id_club==o.player.club.id_club&&l.querySelector('.data-column[column="nickname"]').classList.add("clubmate");let u=l.querySelector('.data-column[column="can_fight"] .go_pre_battle');null!==u&&(u.classList.remove("go_pre_battle"),u.addEventListener("click",(function(){loadingAnimation.start()}))),l.addEventListener("click",(e=>i(e.currentTarget,o))),e===o&&l.classList.add("selected")}config.RemoveChallengeColumn&&setTimeout((()=>{const e=document.querySelector('.data-list .data-row.body-row.player-row .data-column[column="match_history_sorting"]');e.innerHTML="",e.appendChild(document.querySelector("div.player-pin"))}),1)}function i(e,t){var a;document.querySelectorAll("#leagues .league_table .data-list .data-row.body-row").forEach((e=>e.classList.remove("selected"))),e.classList.add("selected"),r(t),function(){let e=document.getElementById("toggle_columns");null===e||e.classList.contains("hidden_girl")||e.click()}(),a=t.player.id_fighter,localStorage.setItem("HHLeaguesPlusPlusLastOpponentId",a)}function r(t){e=t;let a=$("#leagues .league_opponent");a[0].innerHTML="";let l=t.rewards,n=t.match_history;delete t.rewards,delete t.match_history,buildPlayerBlock(t,!1,a),t.rewards=l,t.match_history=n,document.querySelector("#leagues .league_opponent .player-profile-picture").addEventListener("click",(e=>{hero_page_popup({id:t.player.id_fighter,preview:!1,page:"profile"})}));let o=function(e){let t=0;if(!1!==e.match_history[parseInt(e.player.id_fighter)])for(let a=0;a<3;a++)null===e.match_history[parseInt(e.player.id_fighter)][a]&&t++;return t}(t);const u=getSessionId();if(null!=t.player.club){const e=document.createElement("a");e.setAttribute("style","font-size: 11px; color: lightsalmon; text-decoration: none; width: 158px; display: block; margin: 0 auto; -webkit-text-shadow: 3px 1px 5px #000; -moz-text-shadow: 3px 1px 5px #000; text-shadow: 3px 1px 5px #000;"),e.setAttribute("href","/clubs.html?prev_page=leagues.html&view_club="+t.player.club.id_club+(null!==u?"&sess="+u:"")),e.setAttribute("title",t.player.club.name),e.innerHTML=t.player.club.name,document.querySelector("#leagues .league_opponent .personal_info .player_basic_info").appendChild(e)}if(Hero.infos.id!=t.player.id_fighter&&o>0){const e=document.querySelector("#leagues .league_opponent .personal_info .player-name"),a=document.createElement("a");a.setAttribute("class","player-name"),a.setAttribute("style","color: white; text-decoration: none;"),a.setAttribute("href","/leagues-pre-battle.html?id_opponent="+t.player.id_fighter+(null!==u?"&sess="+u:"")),a.setAttribute("title",e.innerText),a.innerHTML=e.innerHTML,e.parentNode.replaceChild(a,e)}let i=document.querySelector("#leagues .league_opponent .player-panel-buttons"),r=document.createElement("div"),c=document.createElement("div");r.setAttribute("class","green_button_L battle-action-button league-single-battle-button"),c.setAttribute("class","green_button_L battle-action-button league-multiple-battle-button"),r.innerHTML=d(1),c.innerHTML=d(o>1?o:3),o>0?r.addEventListener("click",(e=>s(r,c,t,1))):r.setAttribute("disabled","disabled"),o>1?c.addEventListener("click",(e=>s(r,c,t,o))):c.setAttribute("disabled","disabled"),i.appendChild(r),i.appendChild(c),function(e,t){if(!window.HHPlusPlus)return;if(e.sim)(new window.HHPlusPlus.League).display(e.sim);else{window.hero_data=p(Hero.infos.id).player,window.opponent_fighter=e;let t=new window.HHPlusPlus.League;const{player:a,opponent:l}=t.extract(),n=new window.HHPlusPlus.Simulator({player:a,opponent:l}).run();t.display(n),document.querySelectorAll("#leagues .league_opponent .matchRating-value").forEach((function(e){e.innerHTML="! "+e.innerHTML+" !"}))}}(t)}function s(e,t,a,l){if(Hero.energies.challenge.amount>=l){e.setAttribute("disabled","disabled"),t.setAttribute("disabled","disabled");const n=e.cloneNode(!0),o=t.cloneNode(!0);e.parentNode.replaceChild(n,e),t.parentNode.replaceChild(o,t),e=n,t=o,loadingAnimation.start();const u=getSessionId();$.ajax({url:"/leagues-pre-battle.html?id_opponent="+a.player.id_fighter+(null!==u?"&sess="+u:""),success:function(n){window.history.replaceState(null,"",(1===l?"/league-battle.html?number_of_battles=1&id_opponent="+a.player.id_fighter:"/leagues-pre-battle.html?id_opponent="+a.player.id_fighter)+(null!==u?"&sess="+u:""));let o={action:"do_battles_leagues",id_opponent:a.player.id_fighter,number_of_battles:l};hh_ajax(o,(function(n){window.history.replaceState(null,"","/leagues.html"+(null!==u?"?sess="+u:"")),n.rewards.redirectUrl="",loadingAnimation.stop(),function(e){if(!e.lose){const e=document.querySelector("#reward_holder");null!==e&&e.setAttribute("style","")}Reward.handlePopup(e)}(n.rewards),Hero.updates(n.hero_changes),config.ObjectivePopupEnabled&&n.objective_points&&(n.rewards.objective_points=n.objective_points,objectivePopup.show(n.rewards));let o=0;for(const e of n.rewards.data.rewards)if("battle_lost"===e.type){o=e.value;break}const i=function(e,t,a,l){let n=0;3===t&&l>73||2===t&&l>48?n=25:(3===t&&l<11||2===t&&l<8)&&(n=3);let o=3;if(!1!==e.match_history[parseInt(e.player.id_fighter)]){let u="";for(let i=0;i<3;i++){let r=e.match_history[parseInt(e.player.id_fighter)][i];if(null===r&&0!==t){let o,u;t>1?(o=a>2-i?"lost":"won",u="?",0!==n&&(i<2?(u=n.toString(),l-=n):u=l.toString())):(o=1===a?"lost":"won",u=l.toString(),t=0),r=e.match_history[parseInt(e.player.id_fighter)][i]={attacker_won:o,match_points:u}}null!==r?(o--,u+='<div class="result '+r.attacker_won+'">'+r.match_points+"</div>"):u+='<div class="result"></div>'}if(c(e.player.id_fighter,"match_history_sorting").innerHTML=u,0===o){let t=c(e.player.id_fighter,"can_fight");t.innerHTML="",t.parentNode.replaceChild(t.cloneNode(!0),t);document.querySelector("#leagues .league_opponent .personal_info .player-name").removeAttribute("href")}return o}}(a,l,o,n.rewards.heroChangesUpdate.league_points);i>0&&(e.removeAttribute("disabled"),e.addEventListener("click",(l=>s(e,t,a,1))),i>1&&(t.innerHTML=d(i),t.removeAttribute("disabled"),t.addEventListener("click",(l=>s(e,t,a,i)))))}))}})}else HHPopupManager.show("no_energy_challenge",{energy:"challenge",needed:l-Hero.energies.challenge.amount},(()=>s(e,t,a,l)))}function d(e){return'<div class="action-label">Challenge!</div><div class="action-cost"><div><span class="energy_challenge_icn"></span> x'+e+"</div></div>"}function c(e,t){return g(e).querySelector('.data-column[column="'+t+'"]')}function g(e){let t=document.querySelector('#leagues .league_table .data-list .data-row .data-column[column="nickname"] .nickname[id-member="'+e+'"]');return null!==t?t.parentNode.parentNode:null}function p(e){for(let t=0;t<opponents_list.length;t++)if(opponents_list[t].player.id_fighter==e)return opponents_list[t];return null}$(document).on("league:sim-done",(function(){null!==e&&r(e)}))}function LeaguesPreBattle_css(){if(!config.ChallengeX3ButtonEnabled){let e=document.createElement("style");document.head.appendChild(e),e.sheet.insertRule(".league-multiple-battle-button { display:none !important; }")}}function loadConfig(){let e={ObjectivePopupEnabled:!0,ChallengeX3ButtonEnabled:!0,RemoveChallengeColumn:!1};const{HHPlusPlus:t,hhPlusPlusConfig:a}=window;return void 0!==t&&void 0!==a&&(a.registerGroup({key:"HHLeaguesPlusPlus",name:"HH Leagues++"}),a.registerModule({group:"HHLeaguesPlusPlus",configSchema:{baseKey:"ChallengeX3ButtonEnabled",label:"Challenge x3 button enabled",default:!0},run(){e.ChallengeX3ButtonEnabled=!0}}),e.ChallengeX3ButtonEnabled=!1,a.registerModule({group:"HHLeaguesPlusPlus",configSchema:{baseKey:"ObjectivePopupEnabled",label:"Objective popup enabled",default:!0},run(){e.ObjectivePopupEnabled=!0}}),e.ObjectivePopupEnabled=!1,a.registerModule({group:"HHLeaguesPlusPlus",configSchema:{baseKey:"RemoveChallengeColumn",label:"Remove challenge column (Hint: Click on the player's name to open the pre-battle page)",default:!1},run(){e.RemoveChallengeColumn=!0}}),e.RemoveChallengeColumn=!1,a.loadConfig(),a.runModules()),e}"/leagues.html"===window.location.pathname?(Leagues_css(),setTimeout(Leagues_run,1)):"/leagues-pre-battle.html"===window.location.pathname&&LeaguesPreBattle_css();
})(unsafeWindow);
