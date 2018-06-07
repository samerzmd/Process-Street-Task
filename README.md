# Process-Street-Task

Process Street AngularJS Test

Currently in Process Street we support the ability for users to upload their own videos (in addition to letting them use videos from YouTube, Vimeo and Wistia).

Some time back we made a deal with Wistia that lets us upload and serve videos via their platform.

We want you to use the Blueimp File Upload plugin and Wistia to let users upload video to a Wistia account (which will eventually be our account, but you can use a free one for now).

Here’s the Blueimp plugin:
https://github.com/blueimp/jQuery-File-Upload

Here’s a link to the Wistia Upload API:
http://wistia.com/doc/upload-api

Basically what we want you to do create an Angular component (not directive!) that wraps the Wistia uploader. The component should work like this:

- You click an upload button.
- You pick a file.
- The widget uploads the file to Wistia, showing progress in a progress bar of some sort (can be from Bootstrap).
- Once the file completes uploading, it shows as an embedded Wistia video player.
- The component must use Angular 1. Please do not use Angular 2+ or your test will not be reviewed.
- The component must use ES5. Do not use ES6 or your test will not be reviewed.
- The component should have unit tests.
