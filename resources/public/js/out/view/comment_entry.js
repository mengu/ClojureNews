// Compiled by ClojureScript 1.8.51 {}
goog.provide('view.comment_entry');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('util.view');

view.comment_entry.component_story_comment = (function view$comment_entry$component_story_comment(commentt,reply){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var x__24346__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"athing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ind"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votelinks",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),(cljs.core.truth_(view.comment_entry.comment_owner_QMARK_.call(null,commentt))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#5fba7d"], null),"*"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"aa",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votearrow",new cljs.core.Keyword(null,"title","title",636505583),"upvote"], null)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"default"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-10px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"comhead"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/user/"),cljs.core.str(new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)))].join('')], null),new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt))], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/story/"),cljs.core.str(new cljs.core.Keyword(null,"entry-id","entry-id",591934358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)))].join('')], null),view.comment_entry.generate_age_status.call(null,new cljs.core.Keyword(null,"created-date","created-date",929108256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"par"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"storyon"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"comment"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"c00"], null),util.view.parse_comment.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)))], null)], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24346__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10px"], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24346__auto____$2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"textId",new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"cols","cols",-1914801295),"60",new cljs.core.Keyword(null,"rows","rows",850049680),"6"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"buttonReplyStoryCommentId",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__24346__auto____$1,x__24346__auto__){
return (function (_){
return reply.call(null,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
});})(x__24346__auto____$1,x__24346__auto__))
], null),"reply"], null)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24346__auto____$2);
})(),x__24346__auto____$1);
})(),x__24346__auto__);
})()], null)], null);
});
view.comment_entry.component_edit = (function view$comment_entry$component_edit(commentt,edit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var x__24346__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"athing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ind"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votelinks",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),(cljs.core.truth_(view.comment_entry.comment_owner_QMARK_.call(null,commentt))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#5fba7d"], null),"*"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"aa",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votearrow",new cljs.core.Keyword(null,"title","title",636505583),"upvote"], null)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"default"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-10px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"comhead"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/user/"),cljs.core.str(new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)))].join('')], null),new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt))], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/story/"),cljs.core.str(new cljs.core.Keyword(null,"entry-id","entry-id",591934358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)))].join('')], null),view.comment_entry.generate_age_status.call(null,new cljs.core.Keyword(null,"created-date","created-date",929108256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"par"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"storyon"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"comment"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"c00"], null),util.view.parse_comment.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)))], null)], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24346__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10px"], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24346__auto____$2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"textId",new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"cols","cols",-1914801295),"60",new cljs.core.Keyword(null,"rows","rows",850049680),"6",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"buttonReplyStoryCommentId",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__24346__auto____$1,x__24346__auto__){
return (function (_){
return edit.call(null,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
});})(x__24346__auto____$1,x__24346__auto__))
], null),"update"], null)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24346__auto____$2);
})(),x__24346__auto____$1);
})(),x__24346__auto__);
})()], null)], null);
});
view.comment_entry.comment_owner_QMARK_ = (function view$comment_entry$comment_owner_QMARK_(commentt){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user-obj","user-obj",-1257396190).cljs$core$IFn$_invoke$arity$1(commentt)),new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(commentt)));
});
view.comment_entry.generate_age_status = (function view$comment_entry$generate_age_status(created_date){
var current_date = (new Date());
var created_date_as_js = (new Date(created_date));
var min = cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,created_date_as_js,current_date));
var hour = cljs_time.core.in_hours.call(null,cljs_time.core.interval.call(null,created_date_as_js,current_date));
var day = cljs_time.core.in_days.call(null,cljs_time.core.interval.call(null,created_date_as_js,current_date));
if((min < (60))){
if(cljs.core._EQ_.call(null,min,(1))){
return [cljs.core.str(min),cljs.core.str(" minute ago")].join('');
} else {
return [cljs.core.str(min),cljs.core.str(" minutes ago")].join('');
}
} else {
if((hour < (24))){
if(cljs.core._EQ_.call(null,hour,(1))){
return [cljs.core.str(hour),cljs.core.str(" hour ago")].join('');
} else {
return [cljs.core.str(hour),cljs.core.str(" hours ago")].join('');
}
} else {
if(cljs.core._EQ_.call(null,day,(1))){
return [cljs.core.str(day),cljs.core.str(" day ago")].join('');
} else {
return [cljs.core.str(day),cljs.core.str(" days ago")].join('');
}

}
}
});

//# sourceMappingURL=comment_entry.js.map