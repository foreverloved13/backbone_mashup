var RELATIVE_PATH = "backbones/";

$LAB
.script(RELATIVE_PATH + "/models/deals.js").wait()
.script(RELATIVE_PATH + "/models/user.js")
.script(RELATIVE_PATH + "/views/user_navigation.js").wait()
.script(RELATIVE_PATH + "/views/browse.js").wait()
.script(RELATIVE_PATH + "/controllers/shopply.js");