var $$FSR = {
  'enabled': true,
  'frames': false,
  'sessionreplay': true,
  'auto': true,
  'encode': true,
  'version': '18.1.3',
  'files': '/foresee/',
  // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
  //'swf_files': '/some/other/location/'
  'id': 'YPGa+5ynCSHLPaF0cSAB/Q==',
  'definition': 'foresee_surveydef.js',
  'swf': {
    'fileName': 'foresee_transport.swf',
    'scriptAccess': 'always'
  },
  'worker': 'foresee_worker.js',
  'embedded': false,
  'replay_id': 'rei.com',
  'site_id': 'rei.com',
  'attach': false,
  'renderer': 'W3C',
  // or "ASRECORDED"
  'layout': 'CENTERFIXED',
  // or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
  'triggerDelay': 0,
  'heartbeat': true,
  'enableAMD': false,
  'pools': [{
    'path': '.',
    'sp': 100 // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
  }],
  'sites': [{
    'path': /\w+-?\w+\.(com|org|edu|gov|net|co\.uk)/
  },
  {
    'path': '.',
    'domain': 'default'
  }],
  'storageOption': 'cookie',
  'nameBackup': window.name,
  'iframeHrefs': ["frameWorker.html"],
  'acceptableorigins': []
};

$$FSR.FSRCONFIG = {};

(function (config) {

  var FSR, supports_amd = !! config.enableAMD && typeof(_4c.global["define"]) === 'function' && !! _4c.global["define"]["amd"];

  if (!supports_amd) FSR = window.FSR;
  else FSR = {};
/*
 * ForeSee Survey Def(s)
 */
  FSR.surveydefs = [{
    name: 'tablet_web',
    platform: 'tablet',
    invite: {
      when: 'onentry',
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "After your visit, can we email or text you a brief customer satisfaction survey so we can improve your mobile experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thanks for helping!         ",
          blurb: "Please provide your email address or mobile number (US and Canada only). After your visit we'll send you a link to the survey. Text Messaging rates apply.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email/text me",
          error: "Error",
          mobileExitDialog: {
            support: "b",
            //e for email only, s for sms only, b for both
            inputMessage: "email or mobile number",
            emailMeButtonText: "email me",
            textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter a mobile number or email address",
            invalidFormatErrorText: "Format should be: name@domain.com or 123-456-7890"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 25,
      lf: 4
    },
    include: {
      urls: ['.']
    }
  },
  {
    name: 'phone_web',
    platform: 'phone',
    invite: {
      when: 'onentry',
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "After your visit, can we email or text you a brief customer satisfaction survey so we can improve your mobile experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thanks for helping!         ",
          blurb: "Please provide your email address or mobile number (US and Canada only). After your visit we'll send you a link to the survey. Text Messaging rates apply.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email/text me",
          error: "Error",
          mobileExitDialog: {
            support: "b",
            //e for email only, s for sms only, b for both
            inputMessage: "email or mobile number",
            emailMeButtonText: "email me",
            textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter a mobile number or email address",
            invalidFormatErrorText: "Format should be: name@domain.com or 123-456-7890"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 20,
      lf: 3
    },
    include: {
      urls: ['.']
    }
  },
  {
    name: 'browse',
    platform: 'desktop',
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 5,
      lf: 4
    },
    include: {
      urls: ['.']
    }
  }];

/*
 * ForeSee Properties
 */
  FSR.properties = {
    repeatdays: 90,

    repeatoverride: false,

    altcookie: {},

    language: {
      locale: 'en'
    },

    exclude: {},

    ignoreWindowTopCheck: false,

    ipexclude: 'fsr$ip',

    mobileHeartbeat: {
      delay: 60,
      /*mobile on exit heartbeat delay seconds*/
      max: 3600 /*mobile on exit heartbeat max run time seconds*/
    },

    invite: {

      // For no site logo, comment this line:
      siteLogo: "sitelogo.gif",

      //alt text fore site logo img
      siteLogoAlt: "",

      /* Desktop */
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "Thanks for visiting REI.com. You've been selected to participate in a brief customer satisfaction survey to help us improve your experience",
          noticeAboutSurvey: "The survey is designed to measure your entire site experience, so please look for it at the <u>conclusion</u> of your visit.",
          attribution: "This survey is conducted by an independent company, ForeSee, on behalf of REI.",
          closeInviteButtonText: "Click to close.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll give feedback",
          error: "Error",
          warnLaunch: "this will launch a new window"
        }]
      ],

      exclude: {
        urls: ['https'],
        referrers: [],
        userAgents: ['monitis'],
        browsers: [],
        cookies: [],
        variables: [{
          name: 'utag_data.siteId',
          value: 'checkout'
        },
        {
          name: 'utag_data.templateType',
          value: 'cart'
        },
        {
          name: 'utag_data.templateType',
          value: 'your account'
        },
        {
          name: 'utag_data.templateType',
          value: 'gift registry'
        },
        {
          name: 'utag_data.pageName',
          value: 'email_sign_up'
        },
        {
          name: 'utag_data.pageName',
          value: 'email_sign_up_thanks'
        },
        {
          name: 'utag_data.pageName',
          value: 'adventures:online reservation'
        },
        {
          name: 'utag_data.pageName',
          value: 'gift card: purchase physical gift card'
        },
        {
          name: 'utag_data.pageName',
          value: 'gift card: purchase e-gift card'
        },
        {
          name: 'utag_data.fsrInvite',
          value: 'false'
        },
        {
          name: 'utag_data.templateType',
          value: 'order details'
        },
        {
          name: 'utag_data.templateType',
          value: 'wishlist'
        },
        {
          name: 'utag_data.templateType',
          value: 'order details'
        },
        {
          name: 'utag_data.templateType',
          value: 'wishlist'
        },
        {
          name: 'utag_data.internalAddress',
          value: 'true'
        }]
      },
      include: {
        local: ['.']
      },

      delay: 0,
      timeout: 0,

      hideOnClick: false,

      hideCloseButton: false,

      css: 'foresee_dhtml.css',

      hide: [],

      hideFlash: false,

      type: 'dhtml',
      /* desktop */
      // url: 'invite.html'
      /* mobile */
      url: 'invite-mobile.html',
      back: 'url'

      //SurveyMutex: 'SurveyMutex'
    },

    tracker: {
      width: '690',
      height: '415',

      // Timeout is the normal between-page timeout
      timeout: 10,

      // Fast timeout is when we think there's a good chance we've closed the browser
      fasttimeout: 4,

      adjust: true,
      alert: {
        enabled: true,
        message: 'The survey is now available.'
      },
      url: 'tracker.html'
    },

    survey: {
      width: 690,
      height: 600
    },

    qualifier: {
      footer: '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
      width: '690',
      height: '500',
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      buttons: {
        accept: 'Continue'
      },
      hideOnClick: false,
      css: 'foresee_dhtml.css',
      url: 'qualifying.html'
    },

    cancel: {
      url: 'cancel.html',
      width: '690',
      height: '400'
    },

    pop: {
      what: 'survey',
      after: 'leaving-site',
      pu: false,
      tracker: true
    },

    meta: {
      referrer: true,
      terms: true,
      ref_url: true,
      url: true,
      url_params: false,
      user_agent: false,
      entry: false,
      entry_params: false
    },

    events: {
      enabled: true,
      id: true,
      codes: {
        purchase: 800,
        items: 801,
        dollars: 802,
        followup: 803,
        information: 804,
        content: 805
      },
      pd: 7,
      custom: {
        purchase: {
          enabled: true,
          repeat: false,
          source: 'url',
          patterns: ['/rei/OrderReceipt']
        },
        items: {
          enabled: true,
          repeat: false,
          source: 'variable',
          name: 'utag_data.orderQuantityTotal'
        },
        dollars: {
          enabled: true,
          repeat: false,
          source: 'variable',
          name: 'utag_data.orderTotal'
        }
      }
    },

    previous: false,

    analytics: {
      google_local: false,
      google_remote: false
    },

    cpps: {
      customerMemberStatus: {
        source: 'variable',
        name: 'utag_data.customerMemberStatus'
      },
      isLoggedIn: {
        source: 'variable',
        name: 'utag_data.isLoggedIn'
      },
      isMobile: {
        source: 'variable',
        name: 'utag_data.isMobile'
      },
      SearchTerms: {
        source: 'parameter',
        name: 'q'
      }
    },

    mode: 'first-party'
  };

  if (supports_amd) {
    define(function () {
      return FSR
    });
  }

})($$FSR);