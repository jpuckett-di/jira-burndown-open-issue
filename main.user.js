// ==UserScript==
// @name Jira Burndown Open Issue
// @namespace Violentmonkey Scripts
// @match https://carscommerce.atlassian.net/jira/software/c/projects/*/reports/burndown-chart
// @grant none
// @description Opens points (issues) on the burndown in a new tab
// ==/UserScript==

const CLICK_AREA_SELECTOR = "#ghx-chart-view";
const ISSUE_KEY_SELECTOR = "#ghx-tooltip-content-container>strong";

function getIssueKey() {
  return document.querySelector(ISSUE_KEY_SELECTOR).innerText;
}

function attachListener() {
  const clickArea = document.querySelector(CLICK_AREA_SELECTOR);

  if (!clickArea) {
    // recurse
    setTimeout(attachListener, "1000");
    return;
  }

  clickArea.addEventListener("click", () => {
    console.log(getIssueKey());
  });
}

attachListener();
