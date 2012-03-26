## facebook-puppet

#### An open-source project to manipulate the facebook coefficients


__Background__: Facebook stores user data in what they call the Facebook Coefficients.  They use complicated algorithms (which pages you view, who posts on your wall, who are you tagged with in photos, etc.) to determine who you will likely search for, who are your closest friends, and who should appear in your news feed.  This can be great, but also can violate your privacy.

__facebook-puppet__: 
 Enter facebook-puppet, which lets you manually select the people you want to propel to the top of your facebook coefficients.  To operate, install _facebook-puppet_ as a chrome-extension, click the facebook icon that appears and type in a list of the usernames of the friends you want to motivate.  Then click start and let it run.  For the average person, a run of several hours will overrun any facebook coefficient data.

__Installation__: In Chrome, go to `chrome://extensions`, check `developer mode` and click `Load unpacked extension...`.  Navigate to the `facebook-puppet` folder and upload it.  If you want, you can pack it as a CRX for portability.

__Updates:__ facebook-puppet is an experiment and a work in progress.  In the future, there will be three major changes forthcoming:

1.  Make it easier to select friends to update
2.  Finer-grained control over the exact coefficients
3.  Running in background (non-disruptive)