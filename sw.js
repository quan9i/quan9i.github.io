/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ba5fc46e6e89ce0f08c79e484be08feb"],["/DVWA/index.html","3e9f7ce3549804376506bdfae9e2838f"],["/README.html","ed43ccf79e7df5528998f66c2a543e5d"],["/VMmare/index.html","0516710646e2475cdaf6d59bff904d37"],["/about/an.html","4bcbcfaf4ddbc2a47a73004808202a56"],["/about/index.html","be35f1acd68264d55964653d2abf8583"],["/archives/2022/01/index.html","2a7392022e8f17911a2155935678d6b1"],["/archives/2022/01/page/2/index.html","45042cce2fe642867e2c78b6a8147964"],["/archives/2022/01/page/3/index.html","aadceeae04da88558fc4313d6ae77545"],["/archives/2022/02/index.html","0b64a11c149d445e4ed2db3a4c4ee2bb"],["/archives/2022/03/index.html","4feb5528077ac35b76a1ea2678c66931"],["/archives/2022/04/index.html","a26fe6cc9f8d862b989d7ad299e722ab"],["/archives/2022/index.html","07b71aec7f1e809e0467d002ce38da86"],["/archives/2022/page/2/index.html","68a6a6d09c724c77ee34470e2e9c14c4"],["/archives/2022/page/3/index.html","a9d3895c18b6ea66b7a90c77825c925d"],["/archives/2022/page/4/index.html","73e70039dd64ee05ac509375f6b866fb"],["/archives/2022/page/5/index.html","ef400c2c2d83a89ad240acc9cc0ec2e8"],["/archives/index.html","d10050e1d4f93808f3d627999c13a10d"],["/archives/page/2/index.html","223c8df9b0443bb4609396436d8d5e5a"],["/archives/page/3/index.html","369867b3fe7d0792c5c3a6347f7f8745"],["/archives/page/4/index.html","e02e93d66e873b050fee37272ff137bb"],["/archives/page/5/index.html","b36c00101f5787a2cb574ab3b94028d8"],["/burpsuite/index.html","6da8df520511456c14666fb02a1f0d0b"],["/buuctf1/index.html","fc291a55b2579659290952963831e720"],["/buuctf2/index.html","51c179fe5b3c36ef467be2287dd7708c"],["/c/index.html","8b0b5a63d65adcdd0e5bf02ce673727b"],["/categories/c/index.html","f647103ce9c7d55950ba82fcdc276aa7"],["/categories/docker/index.html","b95e230eea47e2de4a7fc611e808ea39"],["/categories/get注入/index.html","80aa6e407addaa0bbaf1aa0814b5c1c9"],["/categories/index.html","a9677125f1c8a95d59de5d6e5a9f139c"],["/categories/post注入/index.html","3cc7cd2914804eb1c35ea40a2f956626"],["/categories/python/index.html","d9b5595177f2e66fe6f02c48af97fd5e"],["/categories/sql注入/index.html","835a97a8c3cc7b894993a72b993face9"],["/categories/sql注入有关知识点/index.html","0364c6e90ac8b3a443162af3a9fa537c"],["/categories/web/index.html","b8031dcef97e26abc3fd9ae1cbbb7711"],["/categories/web基础/index.html","79c8a51301db14091f860d8c78929c89"],["/categories/web安全/index.html","49c848340a8e3d901e97a90334622142"],["/categories/搭建博客/index.html","04f5ab2ac4b863bbe9f829e903098ce7"],["/categories/文件包含/index.html","81b2b2b1ea6d3fb9acda33b79f20e51a"],["/categories/日常/index.html","bdad62f0c4bf522403022dc682e115b6"],["/categories/有关注入相关知识/index.html","92e0d396880eebebddd50559dcc8aebc"],["/categories/虚拟机创建/index.html","fde2d9f147d22f3daf5a37f8f3333db9"],["/command/index.html","0a3339b2ed82e8916c660af3b3a15976"],["/command2/index.html","0e7de108fbb26ccd00eb03aacb81ea9c"],["/css/main.css","3e6a82f62b3a49929adf1d97daa8f826"],["/dingding/index.html","f3a6be450e89dea9028f55495a8e5b08"],["/docker/index.html","5ad201c853319be5fd4276384bb94eb5"],["/dockerstudy/index.html","7dab8418313a66dccc98ef25ed78f532"],["/fileinclude/index.html","2303c1a8205ac98fa45c46dccf8cdeb6"],["/first/index.html","33cbdfd2a8b8bb90b7a06a0d3518b4b6"],["/get注入/index.html","26f3a81acd36a5a40f769ee3602b0a0e"],["/happy year/index.html","af6fbb8099f5c1a9a960740a12ea83db"],["/images/12.jpg","2fee33dfc7fdcad87f41f01a06bccc47"],["/images/33.jpg","43c7f2fe444411f8ef5f6b4befe9e1ec"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","33768352b220c5655514d4e91f892b76"],["/images/alipay.png","33768352b220c5655514d4e91f892b76"],["/images/apple-icon.png","71f65bbb2956226588dba683273c3caa"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","3e006ce0b0f0b4075221bb86a7439e43"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","3fcfb173d4b832bc0e4abd91be27c41a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","5ba385a9ab0353cede1fed5e3895a74e"],["/images/wechatpay.png","5ba385a9ab0353cede1fed5e3895a74e"],["/index.html","6f9858cb03cea07e38f38afc9ff8fe20"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/custom.js","f15156830de1f691bdc4b7fd4254b9e6"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","e6f63249974f98a41978fcf3594dfe0e"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","14992581e33c5dff6f5560ca4af0d8f1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/README.html","c8aed11892e743c8c5cf31f95d5a0b07"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","045cf035ebc3fd3f33e86ea268f46a45"],["/lib/canvas-nest/canvas-nest.min.js","38b2619d931ed01ed7539c951e6e644c"],["/lib/canvas-ribbon/README.html","2f59ea45be4cb1d3d0dd47d134d50612"],["/lib/canvas-ribbon/canvas-ribbon.js","f8ab46dadfd1e24fa262e3d619857198"],["/lib/canvas_ribbon/README.html","dd31f7be1db7bddfc51a8e08952e9f43"],["/lib/canvas_ribbon/canvas-ribbon.js","952c131e3099dbf7aad0c350355fea0a"],["/lib/clipboard/src/actions/copy.js","9bfc1f8c25908c99123c8a34b18a5e41"],["/lib/clipboard/src/actions/cut.js","e8220b1b70db5c410288f8b1bfecb103"],["/lib/clipboard/src/actions/default.js","0e3966a177478e09940bbdee746bb937"],["/lib/clipboard/src/clipboard.js","baa57bace19cf7de4ff79e15772271dd"],["/lib/clipboard/src/common/command.js","f70e490a2d56c49f54ac927b0c08285a"],["/lib/clipboard/src/common/create-fake-element.js","10990fba52fd9640866af9eca45e7aec"],["/lib/clipboard/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","03b486545119bfedc7086ac8d39a1f1c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","f7d7e0176374a35dec6a09d1860cfbc3"],["/lib/jquery_lazyload/README.html","172fd4237e191180ca1c86a950a2a614"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","6889a40290e5a811eae97efc043c8629"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","9fdf18d7ecf3efdd495908987eb121b5"],["/liuyan/index.html","8ddd8fdfdbc13d18433ae0e82337b330"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d-widget-master/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/live2d-widget-master/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/live2d-widget-master/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/live2d-widget-master/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/live2d-widget-master/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/live2d-widget-master/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/live2d-widget-master/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d-widget-master/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/live2d-widget-master/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/live2d-widget-master/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/myself/index.html","4530c017439ec5f91b8502054dcced1a"],["/page/2/index.html","86d04ef4849b1e279c3e19fae5f42b68"],["/page/3/index.html","18ea50e896d160e50b3364b45a3f3b45"],["/page/4/index.html","2579abd8d52e14ae66dceb13f984830d"],["/page/5/index.html","85053e166027d89fd0d3d01118c16d4d"],["/page/6/index.html","95bbb41255755fb190d3245ba31bba6b"],["/page/7/index.html","518e54d37aa8f2bca9b016a5c74b8b01"],["/page/8/index.html","65cee4f17677ab4fcc4f8529dfd20ca1"],["/page/9/index.html","a22c46fd61bfccf5aa76c4b41c6490bb"],["/play/index.html","980eee2a51059e6ceb5c2a5ff51f920b"],["/post注入/index.html","8d11e7e072ca726a4ae4748a11d61208"],["/post注入2/index.html","2c5734ca50d027ffa512a8d01158ecbc"],["/python for sql/index.html","e6e4c29e8d9694bba83e01ee9de7809d"],["/python/index.html","964a952f5d04738bb5d80d71b63a82bf"],["/python2/index.html","cce0a7ab933833adf41be2ad03d967c7"],["/python安装/index.html","acedc8c541807f0df047127763cd9a12"],["/python插件/index.html","9a3994097848035d705e90e4df187d1c"],["/schedule/index.html","b52d571b3a51cf8f4eddaa223a556690"],["/schedule/个性签名.html","147847e97370263fa7985679f2b7811b"],["/second/index.html","872dba2d5a4cd2b837de130c1397b785"],["/sql-lab/index.html","2eaf86afff1abdf48f331ae683a2ef4c"],["/sql-lab23启/index.html","d2369071c85d920d1c9c2490f64e74bd"],["/sqlmap/index.html","e207fc11aa831a37afc77d9478613c98"],["/sqlprotect/index.html","1ae2961a718445df37ebbcb79c9b05df"],["/sqlway/index.html","28cc47de1cffb9899343d5cc919ddef2"],["/sqlzhuru/index.html","a12fb97b660bb4a5c27fd74d297d1fd8"],["/sql注入相关知识扩充/index.html","5e2b7ea079ef997f7428ff9e6d7b55bd"],["/sw-register.js","38fa882b8a3374d00b85d85907a96ddd"],["/tags/index.html","55e95dabfe13092181f6596e7740e26e"],["/tags/sql注入/index.html","8cab6c3945bdf298c906a08411458dc4"],["/tags/sql注入/page/2/index.html","f7fa3c84d47932e5a454a88466d46e70"],["/tags/web安全/index.html","ef42b53d67ee98755c7b66dc00b83c51"],["/tags/web新手题/index.html","9bb8d6ef1198bcb36a0d29996b3f497c"],["/tags/刷题/index.html","d0ef74ec14c9c03445172cd6fe2ea273"],["/tags/博客/index.html","a044ed78ffe530514f59f0a20d133c59"],["/tags/文件包含/index.html","1eb3b9b16ba1bbd27b39b9851bc8d712"],["/tags/漏洞/index.html","b5cd41b061946e4e77649838939683cd"],["/tags/电影观后感/index.html","546ddf8b984f67f7cd9cba388a1fdf7a"],["/tags/自己/index.html","7b5f5552f64956d302cf0526d0d649be"],["/tags/虚拟机/index.html","4eadaf9ed2d413f59941da6e1ae5edd8"],["/tags/语言学习/index.html","74bb9c9f57234eecc24682c47be99d46"],["/twofen/index.html","65625c19fa80597849a3655c0a04f382"],["/vc++/index.html","2ab819fe6faa5e286f7708c78c1103b4"],["/websecurity1/index.html","52100267d13a01c7ca584cbebf5c6a55"],["/websecurity2/index.html","ebb942bcaeb4cd4951f5accce6e10f00"],["/websecurity3/index.html","6383943c928611bdac1ad5756e0ddc24"],["/web新手题题解/index.html","f916e80ee34fcf16b90fbb57d3c048c5"],["/zanshang/index.html","39ccfee88152a2caafd80bcdfabd4c8b"],["/zhengze/index.html","3f47367343a7b156e2a17980db37f489"],["/二次注入/index.html","e62e99f095cfa076ef3067cd6c18985e"],["/博客优化/index.html","e6758926b653d9648fa73035387bda7a"],["/堆叠注入/index.html","0706824fa0282e7942d58d3aebcf83cb"],["/源码分析/index.html","81632b6f20064dd1492a7df35d5032e0"],["/联合查询/index.html","14c6f3f8cfefcc74744b7e2068334b21"],["/观后感/index.html","37f3e241b8c156eabaeb6ed8338180b2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
