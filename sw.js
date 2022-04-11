/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7149036d511a77ce5fead9ae27921b12"],["/DVWA/index.html","c70a080e10649675a2a27187c0f6ecbe"],["/README.html","d9df7e652472c76e338161d504f51c03"],["/VMmare/index.html","3de7e414d8e3f150545605dc3f188931"],["/about/an.html","d0345252285c1c4406cb0ee96abe1319"],["/about/index.html","c02b38760e727d3eeae4bcd98a992cf9"],["/archives/2022/01/index.html","a449dba67f473ff3e6238c10eb06c9c2"],["/archives/2022/01/page/2/index.html","65f0c743437073abb2986a763f55df43"],["/archives/2022/01/page/3/index.html","c5fff59d6b377820cbd2a0cc1a26f6b7"],["/archives/2022/02/index.html","09116128f8079759edd196651812f8ac"],["/archives/2022/03/index.html","e89d2fe19aa716ba60df899c392ea822"],["/archives/2022/04/index.html","fa27350a5845d809002bbe036a3a620d"],["/archives/2022/index.html","b88c9029007001a04ab2a7f2a865b475"],["/archives/2022/page/2/index.html","a79a25f41968a8e0a221c02e38f64cbf"],["/archives/2022/page/3/index.html","3e7ef6cd3a57da50e23a23a9dc9983fc"],["/archives/2022/page/4/index.html","bae3bbfeded0cfacc9578a9dcc8732f5"],["/archives/2022/page/5/index.html","f89a2d3356045ba913b460e44026ab13"],["/archives/index.html","9e544b95b253bdfa7c390d6123de2c32"],["/archives/page/2/index.html","46e9348622f932eb326b81600e423626"],["/archives/page/3/index.html","d42714b8b551123eb7ac9a7dfc1c3fa4"],["/archives/page/4/index.html","e278e96013b14f2265f9c47e26bea956"],["/archives/page/5/index.html","7e2ad1456645f3cfbc72312a68c8bef2"],["/burpsuite/index.html","cb283680704fa1e0dd1c8040ae77f087"],["/buuctf1/index.html","5621fe3785a6f0f381d3269cc14259b6"],["/buuctf2/index.html","c93ce94bbd116019defd67ed213b2cc6"],["/c/index.html","5a31c6d0f01e01706ea6c7aba16b0c1c"],["/categories/c/index.html","abcd44de1c69a7e24d52365b620514cf"],["/categories/docker/index.html","62ff6ce1e962dd39ebda2e90dc7a1175"],["/categories/get注入/index.html","b8a5d3f65d0666ce7de902faa676ea6c"],["/categories/index.html","26ebae53bb35ff554575769497ecb587"],["/categories/post注入/index.html","abd7932ee21a63ebc875582a1e442829"],["/categories/python/index.html","3d9e28947d05d078cb23618ac9dde2ee"],["/categories/sql注入/index.html","11fc147b775512b98184b02de1be591d"],["/categories/sql注入有关知识点/index.html","0496091519f1d0a5b9df6a6808678a27"],["/categories/web/index.html","f47d3fdc48c419c059b9224a0f91e076"],["/categories/web基础/index.html","c654a33fdb3320be3e206860cdc10d97"],["/categories/web安全/index.html","9e38735acf25b25755d1faa2707bd188"],["/categories/搭建博客/index.html","d1d17afa0e6bae071c70add3e8ffcee5"],["/categories/文件包含/index.html","c5520a6d7456a7c633ccfd71335ff4c2"],["/categories/日常/index.html","914149be6d6f8e9c132c8260eb0b012b"],["/categories/有关注入相关知识/index.html","ec96b8be8c51f06592c927043af15129"],["/categories/虚拟机创建/index.html","5147c11ed4649886b47b30b837baa51c"],["/command/index.html","a6e69e210969ef628b323c66b478f2a7"],["/command2/index.html","cd32c40805cb510e568d622b15178f33"],["/css/main.css","3e6a82f62b3a49929adf1d97daa8f826"],["/dingding/index.html","dde3b2ae46074125f491899c0bd1ca9f"],["/docker/index.html","73e894b0e59779027be02c3a7781cc7d"],["/dockerstudy/index.html","756749e5d40fc93a27249c094cc18309"],["/fileinclude/index.html","e5b5dca51fded21a6880e4b0a5ea6fad"],["/first/index.html","4c731c0e357de56979d25168e395d53d"],["/get注入/index.html","76d77605efe31a65f1187e40911f9d47"],["/happy year/index.html","50f4f404f417a30ade5eb2a9606f88ea"],["/images/12.jpg","2fee33dfc7fdcad87f41f01a06bccc47"],["/images/33.jpg","43c7f2fe444411f8ef5f6b4befe9e1ec"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","33768352b220c5655514d4e91f892b76"],["/images/alipay.png","33768352b220c5655514d4e91f892b76"],["/images/apple-icon.png","71f65bbb2956226588dba683273c3caa"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","3e006ce0b0f0b4075221bb86a7439e43"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","3fcfb173d4b832bc0e4abd91be27c41a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","5ba385a9ab0353cede1fed5e3895a74e"],["/images/wechatpay.png","5ba385a9ab0353cede1fed5e3895a74e"],["/index.html","23fd754099890e2a72056179c3b26bac"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/custom.js","f15156830de1f691bdc4b7fd4254b9e6"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","e6f63249974f98a41978fcf3594dfe0e"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","14992581e33c5dff6f5560ca4af0d8f1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/README.html","fd3909226a36127fb6630ba6549ad9ca"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","045cf035ebc3fd3f33e86ea268f46a45"],["/lib/canvas-nest/canvas-nest.min.js","38b2619d931ed01ed7539c951e6e644c"],["/lib/canvas-ribbon/README.html","b2faf56bd10fa82b87aac4b41445ed96"],["/lib/canvas-ribbon/canvas-ribbon.js","f8ab46dadfd1e24fa262e3d619857198"],["/lib/canvas_ribbon/README.html","dd31f7be1db7bddfc51a8e08952e9f43"],["/lib/canvas_ribbon/canvas-ribbon.js","952c131e3099dbf7aad0c350355fea0a"],["/lib/clipboard/src/actions/copy.js","9bfc1f8c25908c99123c8a34b18a5e41"],["/lib/clipboard/src/actions/cut.js","e8220b1b70db5c410288f8b1bfecb103"],["/lib/clipboard/src/actions/default.js","0e3966a177478e09940bbdee746bb937"],["/lib/clipboard/src/clipboard.js","baa57bace19cf7de4ff79e15772271dd"],["/lib/clipboard/src/common/command.js","f70e490a2d56c49f54ac927b0c08285a"],["/lib/clipboard/src/common/create-fake-element.js","10990fba52fd9640866af9eca45e7aec"],["/lib/clipboard/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","03b486545119bfedc7086ac8d39a1f1c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","f7d7e0176374a35dec6a09d1860cfbc3"],["/lib/jquery_lazyload/README.html","172fd4237e191180ca1c86a950a2a614"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","6889a40290e5a811eae97efc043c8629"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","07e3065e79f9909aca614f33f759bd55"],["/liuyan/index.html","fdbcdcb8188ed5aec9988a65c614aa76"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d-widget-master/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/live2d-widget-master/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/live2d-widget-master/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/live2d-widget-master/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/live2d-widget-master/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/live2d-widget-master/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/live2d-widget-master/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d-widget-master/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/live2d-widget-master/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/live2d-widget-master/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/myself/index.html","37a2f53bb2a37fa562ae6452954aaec0"],["/page/10/index.html","022c80b78555ed8c42a8b0c575b75d5f"],["/page/2/index.html","f5a41f4e45390b230fe7de9f610f6253"],["/page/3/index.html","994d2aca0a81a800f96cbbf42a24eeef"],["/page/4/index.html","23d628c7b8f5ad8c365b1f400c814e9f"],["/page/5/index.html","f40dc6aeb2bb645edd4b31d5a0297620"],["/page/6/index.html","da4dfb08f6d2c070097e5060eafcf589"],["/page/7/index.html","8e3879a748ec24c6fb676e08244fee8f"],["/page/8/index.html","6ec75df7090a8804ca4fac2e41d71858"],["/page/9/index.html","a240019307b0e7c0ac42f3101c772025"],["/pikachu/index.html","dce92b0a5458d2ee2da985f80d64202e"],["/play/index.html","9d876feffe34bca6e75b5bc525dfae73"],["/post注入/index.html","fe2e5abf50a73921419c3a872a1fcfc3"],["/post注入2/index.html","dcaff7c4e91979000d26db8350b970dd"],["/python for sql/index.html","643c7d7f79839b14928248420a175ef4"],["/python/index.html","e21cb0b8c835847649be7b7b329a200e"],["/python2/index.html","45b7932ffffa64318cfbbb1a754f7c3b"],["/python安装/index.html","0eda7302296c87bdde332475b222e56c"],["/python插件/index.html","e4a8b5ac8f4247aa650d769000ed1ced"],["/schedule/index.html","7bdc2618e9ac7d77ad8b98f6b957df7c"],["/schedule/个性签名.html","1c113eefbd9ccecd3758a40d8e9917cf"],["/second/index.html","2c104c8862c3ab6713b30a99d67b6283"],["/sql-lab/index.html","2b676f660a5df3790483a7c1b6004d3f"],["/sql-lab23启/index.html","a6f7f299c7327b01fd04f424a2998acf"],["/sqlmap/index.html","acda706533402e1b963b98358cbedf4d"],["/sqlprotect/index.html","b1e53185ca7491c3f59ac75b252003af"],["/sqlway/index.html","bd74c300322e2c1cb20f630be8fa8b93"],["/sqlzhuru/index.html","8a929eccc745ff5052a35d61aef30091"],["/sql注入相关知识扩充/index.html","68ff948bdb156090bcd50945556ffd06"],["/sw-register.js","31a857145cd8af27495132837507f522"],["/tags/index.html","6021112bbc54eea0b15d8c7a2ad4b89b"],["/tags/sql注入/index.html","12734bd1928df7f57e02dd15a045849b"],["/tags/sql注入/page/2/index.html","40a621bbe7ac7bbf4c8c33c17280a9a5"],["/tags/web安全/index.html","6a1536a6af248b733fc717a24ea93c50"],["/tags/web新手题/index.html","86ae65dd44d9230212ff60913b6b5455"],["/tags/刷题/index.html","5a94eb4da90cdc1b3f5dc860acf18e25"],["/tags/博客/index.html","bc777bf315dedb19d8e3200ec82719b8"],["/tags/文件包含/index.html","96c3d84e7a4b90c0559752e6877faeca"],["/tags/漏洞/index.html","8d25e36fcbc3087d36e089b337720df9"],["/tags/电影观后感/index.html","7dbc5a95c1c464ea48134f36ce4d7ea8"],["/tags/自己/index.html","cf85ec347660cace42351dccb9d3b9ae"],["/tags/虚拟机/index.html","789f5e642cb0fa7cd5ab41fd9851cff6"],["/tags/语言学习/index.html","79f05f6fed3bc0ecbbd2bf1db6382154"],["/twofen/index.html","9d5b9aaa990d0d7efee2309f7fc4ae03"],["/vc++/index.html","ca96b950d984d41ee1c2f8f812dae49b"],["/websecurity1/index.html","2df3f9e23d0f4d99edf08c6aa65c0e77"],["/websecurity2/index.html","76eafcbeeb4134ad37c3641c28ba7498"],["/websecurity3/index.html","de4b400250077e5fd453237308100856"],["/web新手题题解/index.html","19adbb033837160cc87ffd40ac46da1b"],["/zanshang/index.html","b802d2685d05c86b1c7a3d210cc77bb3"],["/zhengze/index.html","01d4f703b8ba1c8ac3704d40defbbefa"],["/二次注入/index.html","9910f30f19bba1a005e513268a52535d"],["/博客优化/index.html","4ece166a6182ad6a0f5f2241518847e2"],["/堆叠注入/index.html","d3295693862e22b95bd58d2a680d48e5"],["/源码分析/index.html","0892478f498bc35ab3cd5be64639743e"],["/联合查询/index.html","de338916cec517edf688d4d2bf2b9b22"],["/观后感/index.html","f83599af09e2e9e23c750b49f2dc70c1"]];
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
