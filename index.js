// tab is an array of titles of each site open within the window

const Window = function (tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windws into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
}

// When you open a new tab at the end
Window.prototype.tabOpen = function (tabs) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

    // Only change code below this line

    // Get the tabs before the tab
    const tabsBeforeIndex = this.tabs.splice(0, index);
    
    // Get the tabs after the tab    
    const tabsAfterIndex = this.tabs.splice(index + 1);

    // Join them together
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);


    // Only change code above this line

    return this;

};


// Let's create three browser windows

// Your mailbox, drive, and other work sites.
const workWindow = new Window(['Gmail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);

// Social sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);

// Entertainment sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

// Now perform the tab opening, closing, and other operations

const finalTabs = socialWindow
.tabOpen() // Open a new tab for cat memes
.join(videoWindow.tabClose(2)) // Close third tab in video window, and join
.join(workWindow.tabClose(1).tabOpen());

console.log(finalTabs.tabs);