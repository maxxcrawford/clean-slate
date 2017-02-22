function handleCreated(tab) {
  console.dir(tab);
}

browser.tabs.onCreated.addListener(handleCreated);
