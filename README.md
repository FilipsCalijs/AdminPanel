## ABORT THIS MODULE
I suspended work on the project from lesson 19 - Creating a meta tag editor, since an error appeared on mac devices that I have not been able to fix for 3 days and every time it is new, I will now think and fix it, but it appeared out of nowhere and now I can't clean up

## React Admin Panel Description

This project is a web-based admin panel built with React. It allows administrators to manage web pages, create backups, and restore pages from backups. The project is structured to separate different concerns into their respective components and helper files, making it modular and maintainable.

### Project Structure

The project has the following structure:

### bug and fix:

1. in const dist you need to chose YOUR PATH; 
2. a bug has appeared that even gulp/npm won’t let me run, I’ve been fiddling with it for half an hour and nothing is working, I’m already tired after work today, and I still have to continue the activation strike, so I’ll just release this message and then delete it when I fix the bug or just switch to another device (he hasn't work on mac, on windows work very well now)

### Components

1. **choose-modal**
2. **confirm-modal**
3. **editor**
4. **editor-text**
5. **panel**
6. **spinner**

### Helpers

1. **dom-helper.js**: Likely contains functions to manipulate the DOM.
2. **iframeLoader.js**: Likely contains functions to manage iframes.

### Main Files

- **index.html**: Main HTML file.
- **main.js**: Main JavaScript file.

### Admin API

PHP scripts to handle various administrative tasks:

- **createNewPage.php**: Create a new page.
- **deletePage.php**: Delete an existing page.
- **deleteTempPage.php**: Delete a temporary page.
- **index.php**: Entry point for the admin API.
- **pageList.php**: Retrieve the list of pages.
- **restoreBackup.php**: Restore a page from a backup.
- **savePage.php**: Save the current page.
