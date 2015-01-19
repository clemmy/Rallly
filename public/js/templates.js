angular.module("rallly").run(["$templateCache", function($templateCache) {$templateCache.put("templates/about.html","<div style=\"max-width:600px\">\n    <h1>What is Rallly?</h1>\n    <div class=\"rl-page-desc\">Rallly is a collaborative scheduling service that makes deciding on a date fast and easy.</div>\n    <h2>Hi, I\'m Luke!</h2>\n    <p>\n        I created Rallly as side project to help me learn some new technologies. I decided to publish it because I thought other people might find it useful. Rallly is a completely free service. In fact it is even open source. You can look at the latest source code on Github.\n    </p>\n</div>\n");
$templateCache.put("templates/confirmmodal.html","<div class=\"rl-modal-overlay\" ng-click=\"modal.cancel()\"></div>\n\n<div class=\"rl-modal\">\n    <div class=\"rl-modal-title\">{{modal.title}}</div>\n    <div class=\"rl-modal-message\">\n        {{modal.message}}\n    </div>\n    <div class=\"rl-modal-actions\">\n        <button ng-click=\"modal.confirm()\" ng-show=\"modal.confirm\" class=\"btn\" ng-class=\"{danger : modal.isDestructive}\">{{modal.confirmText}}</button>\n        <button ng-click=\"modal.cancel()\"  class=\"btn\">{{modal.cancelText}}</button>\n    </div>\n</div>\n");
$templateCache.put("templates/editevent.html","<div ng-show=\"event._id\">\n    <div class=\"box\">\n\n        <div class=\"box-title\">Edit Event</div>\n        <div class=\"box-description\">\n            You can makes changes to your existing event by changing the fields in the form below.\n        </div>\n\n        <form novalidate name=\"form\" ng-submit=\"submit()\">\n\n            <section class=\"box-section\" user-form form=\"form\" event=\"event\">\n\n            </section>\n\n            <section class=\"box-section\" event-form form=\"form\" event=\"event\">\n\n            </section>\n            <section class=\"box-section\" date-form form=\"form\" event=\"event\">\n\n            </section>\n            <div class=\"box-controls box-bottom-sticky\">\n                <button type=\"submit\" ng-show=\"didChange()\" class=\"btn btn-primary\" ng-class=\"{disabled : !didChange()}\">\n                    Save Changes\n                </button>\n                <button ng-click=\"undoChanges()\" class=\"btn\" ng-show=\"didChange()\">Undo Changes</button>\n                <a href=\"/{{event._id}}\" class=\"btn\" ng-hide=\"didChange()\">Done</a>\n            </div>\n\n        </form>\n\n    </div>\n\n</div>\n");
$templateCache.put("templates/event.html","<div ng-show=\"event._id\">\n    <div class=\"box \">\n        <div class=\"event-header\">\n            <div class=\"avatar\">\n                <img src=\"/images/eventicon.png\" width=\"32  \" />\n            </div>\n            <div class=\"details\">\n                <div class=\"title\">\n                    {{event.title}}\n                </div>\n                <div class=\"subtitle\">\n                    Created by <a href=\"mailto:{{event.creator.email}}\">{{event.creator.name}}</a> &bull; {{event.created | elapsed}}\n                </div>\n            </div>\n            <div class=\"actions\">\n                <button class=\"btn\" ng-click=\"editEvent()\">Edit Event</button>\n            </div>\n        </div>\n        <div class=\"box-side-sticky event-description\" ng-show=\"event.description\">{{event.description}}</div>\n        <div class=\"box-bottom-sticky event-location\" ng-show=\"event.location\">\n            <img src=\"/images/location.png\" width=\"18\" /><a href=\"http://google.com/maps?q={{event.location}}\" target=\"_blank\">{{event.location}}</a>\n        </div>\n\n    </div>\n    <div class=\"box box-x-scroll\">\n        <div poll event=\"event\" class=\"poll\" participant=\"participant\">\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/home.html","<div class=\"page-placeholder\">\n    <div class=\"image\">\n        <img src=\"/images/mark_large.png\" width=\"67\" />\n    </div>\n    <div class=\"title\">\n        Schedule an Event\n    </div>\n    <div class=\"content\">\n        Want to host an event but can’t decide on a date? Click on the button below to start!\n    </div>\n    <button ng-click=\"newEvent()\" class=\"btn\">Schedule New Event</button>\n</div>\n");
$templateCache.put("templates/newevent.html","<div ng-hide=\"eventUrl\">\n    <div class=\"box\" ng-class=\"{\'animated shake\': form.$submitted && form.$invalid }\">\n\n        <div class=\"box-title\">Schedule a New Event</div>\n        <div class=\"box-description\">\n            Fill in the form below to create your event and share it with your friends and colleagues.\n        </div>\n\n        <form novalidate name=\"form\" ng-submit=\"submit()\">\n            <section class=\"box-section\" user-form form=\"form\" event=\"event\">\n\n            </section>\n\n            <section class=\"box-section\" event-form form=\"form\" event=\"event\">\n\n            </section>\n\n            <section class=\"box-section\" date-form form=\"form\" event=\"event\">\n\n            </section>\n\n            <section class=\"box-section\" participants-form form=\"form\" event=\"event\">\n\n            </section>\n\n            <div class=\"box-controls box-bottom-sticky\">\n                <button type=\"submit\" class=\"btn btn-primary\">Create Event</button>\n            </div>\n\n        </form>\n    </div>\n</div>\n<div ng-show=\"eventUrl\" class=\"box fx-fade-up\">\n    <div class=\"box-message\">\n            <div class=\"main-image\">\n                <img src=\"/images/success_large.png\" width=\"100\" />\n            </div>\n    <div class=\"title\">Event Created</div>\n    <div class=\"content\">\n        Your event has been created successfully! Make sure you visit the page yourself and fill in the poll.\n    </div>\n    <div class=\"mini-divider\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" disabled=\"true\" value=\"{{eventUrl}}\" />\n        <a href=\"{{eventUrl}}\" class=\"btn form-btn\">GO</a>\n    </div>\n    </div>\n</div>\n");
$templateCache.put("templates/notfound.html","<h1>Error 404</h1>\n<h2>Not Found</h2>\n");
$templateCache.put("templates/directives/poll.html","<div class=\"poll-header\">\n    <div class=\"header participants-header\">\n        {{event.participants.length}} participants\n    </div>\n    <div class=\"header date-header\" ng-repeat=\"date in event.dates\">\n        <div class=\"daticon\">\n            <div class=\"dow\">\n                {{date | date: \'EEE\'}}\n            </div>\n            <div class=\"day\">\n                {{date | date: \'d\'}}\n            </div>\n            <div class=\"month\">\n                {{date | date : \'MMM\'}}\n            </div>\n            <span class=\"count\" ng-show=\"selectedDate($index)\" ng-class={top:isTopDate($index)}>{{selectedDate($index)}}</span>\n        </div>\n    </div>\n    <div class=\"header actions-header\">\n\n    </div>\n</div>\n<div class=\"poll-body\">\n    <div class=\"poll-entry\" ng-repeat=\"participant in event.participants\">\n        <form novalidate ng-submit=\"update(participant); editMode = false\">\n            <div class=\"cell name-cell\">\n                <span class=\"avatar style-{{$index + 1}}\">\n                    <img src=\"/images/user.png\" width=\"11\" />\n                </span>\n                <input required autocomplete=\"off\" type=\"text\" class=\"form-control\" ng-model=\"participant.name\" ng-show=\"editMode\" value=\"participant.name\"/>\n                <span ng-hide=\"editMode\" class=\"name\" ng-click=\"editMode = true; edit(participant)\">{{participant.name}}</span>\n            </div>\n            <div class=\"cell vote-cell\" ng-repeat=\"date in event.dates\">\n                <img src=\"/images/tick@2x.png\"  width=\"16\" ng-hide=\"editMode\" ng-if=\"participant.dates[$index]\" />\n                <img src=\"/images/nope@2x.png\" width=\"8\" ng-hide=\"editMode\" ng-if=\"!participant.dates[$index]\" />\n                <input ng-model=\"participant.dates[$index]\" ng-show=\"editMode\" ng-false-value=\"false\" type=\"checkbox\" />\n                <div class=\"overlay\" ng-show=\"editMode\" ng-click=\"participant.dates[$index] = !participant.dates[$index]\"></div>\n            </div>\n            <div class=\"cell action-cell\">\n                <a href=\"#\" ng-hide=\"editMode\" ng-click=\"editMode = true; edit(participant)\" class=\"btn hover\">Edit</a>\n                <a href=\"#\" ng-hide=\"editMode\" ng-click=\"delete(participant)\" class=\"btn danger hover\">Delete</a>\n                <button ng-show=\"editMode\" type=\"submit\" class=\"btn\">Save</button>\n                <a href=\"#\" ng-show=\"editMode\" ng-click=\"editMode = false; cancel($index)\"  class=\"btn\">Cancel</a>\n            </div>\n        </form>\n    </div>\n    <div class=\"poll-entry highlight\">\n        <form novalidate name=\"formnew\" ng-submit=\"save(participant)\">\n            <div class=\"cell name-cell\">\n                <span class=\"avatar style-{{participant.style}}\">\n                    <img src=\"/images/user.png\" width=\"11\" />\n                </span>\n                <input autocomplete=\"off\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Your name...\" ng-model=\"participant.name\" required value=\"participant.name\"/>\n            </div>\n            <div class=\"cell vote-cell\" ng-repeat=\"date in event.dates\">\n                <input ng-model=\"participant.dates[$index]\" ng-false-value=\"false\" type=\"checkbox\" />\n                <div class=\"overlay\" ng-click=\"participant.dates[$index] = !participant.dates[$index]\"></div>\n            </div>\n            <div class=\"cell action-cell\">\n                <button type=\"submit\" ng-class=\"{ \'animated shake\' : formnew.$submitted && formnew.$invalid  }\" class=\"btn\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>\n");
$templateCache.put("templates/directives/eventForm/dateForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Choose Dates</div>\n    <ul class=\"daticon-list\">\n        <li ng-repeat=\"date in event.dates\">\n            <div class=\"daticon\">\n                <div class=\"dow\">\n                    {{date | date: \'EEE\'}}\n                </div>\n                <div class=\"day\">\n                    {{date | date: \'d\'}}\n                </div>\n                <div class=\"month\">\n                    {{date | date : \'MMM\'}}\n                </div>\n                <span class=\"delete\" ng-click=\"datepicker.unsetDate(date)\"></span>\n            </div>\n        </li>\n    </ul>\n</div>\n<div class=\"section-main\">\n    <div class=\"form-row\">\n        <div class=\"form-group\">\n            <label for=\"email\">Calendar</label>\n            <span class=\"form-error\" ng-show=\"(form.datepicker.$dirty || form.$submitted) && form.datepicker.$error.required\">\n                <img src=\"/images/error.png\" width=\"14\" /> You need to select a few dates\n            </span>\n            <div datepicker required name=\"datepicker\" control=\"datepicker\" ng-model=\"event.dates\">\n\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/directives/eventForm/eventForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Event Details</div>\n</div>\n<div class=\"section-main\">\n    <div class=\"form-row\">\n        <div class=\"form-col\">\n            <div class=\"form-group\">\n                <label for=\"title\">Title</label>\n                <span class=\"form-error\" ng-show=\"(form.title.$touched || form.$submitted) && errors.title\">\n                    <img src=\"/images/error.png\" width=\"14\" /> {{errors.title}}\n                </span>\n                <input id=\"title\" name=\"title\" ng-maxlength=\"30\" required ng-model=\"event.title\" type=\"text\" placeholder=\"Monthly Meetup...\" class=\"form-control extend\"/>\n            </div>\n        </div>\n        <div class=\"form-col\">\n            <div class=\"form-group optional\">\n                <label for=\"location\">Location</label>\n                <span class=\"form-error\" ng-show=\"(form.location.$touched || form.$submitted) && errors.location\">\n                    <img src=\"/images/error.png\" width=\"14\" /> {{errors.location}}\n                </span>\n                <input id=\"location\" name=\"location\" ng-model=\"event.location\" ng-maxlength=\"50\" type=\"text\" placeholder=\"Rick\'s Cafe...\" class=\"form-control extend\"/>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-row\">\n        <div class=\"form-group optional\">\n            <label for=\"description\" >Description</label>\n            <textarea id=\"description\" name=\"description\" ng-model=\"event.description\" placeholder=\"Enter Description...\" class=\"form-control extend\"></textarea>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/directives/eventForm/participantsForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Invite Participants</div>\n</div>\n<div class=\"section-main\">\n    <div class=\"form-row\">\n        <div class=\"form-group optional\">\n            <label for=\"emails\">Participant\'s Emails</label>\n            <textarea id=\"emails\" ng-list ng-model=\"event.emails\" placeholder=\"Enter Emails...\" class=\"form-control extend\"></textarea>\n        </div>\n    </div>\n</div>\n</section>\n");
$templateCache.put("templates/directives/eventForm/userForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Your Details</div>\n</div>\n<div class=\"section-main\">\n    <div class=\"form-row\">\n        <div class=\"form-col\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <span class=\"form-error\" ng-show=\"(form.name.$touched || form.$submitted) && errors.name\">\n                    <img src=\"/images/error.png\" width=\"14\" /> {{errors.name}}\n                </span>\n                <input id=\"name\" name=\"name\" ng-maxlength=\"30\" required ng-model=\"event.creator.name\" type=\"text\" placeholder=\"John Doe...\" class=\"form-control extend\"/>\n            </div>\n        </div>\n        <div class=\"form-col\">\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <span class=\"form-error\" ng-show=\"(form.email.$touched || form.$submitted) && errors.email\">\n                    <img src=\"/images/error.png\" width=\"14\" /> {{errors.email}}\n                </span>\n                <input type=\"email\" id=\"email\" name=\"email\" ng-pattern=\"emailRegex\" required ng-model=\"event.creator.email\" placeholder=\"john.doe@email.com...\" class=\"form-control extend\"/>\n            </div>\n        </div>\n    </div>\n</div>\n");}]);