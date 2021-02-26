(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||r;return a?o.a.createElement(m,s(s({ref:t},d),{},{components:a})):o.a.createElement(m,s({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),o=a(7),r=(a(0),a(101)),i={title:"Starting a Test Network",id:"starting-a-test-network"},s={unversionedId:"advanced/starting-a-test-network",id:"advanced/starting-a-test-network",isDocsHomePage:!1,title:"Starting a Test Network",description:"A test network can be used to test your applications in an isolated environment before you deploy to Swarm mainnet. It can be started by overriding the default configuration values of your Swarm node. Throughout this tutorial, we will make use of configuration files to configure the nodes but of course you can also do the same using flags or environment variables (see Start your node).",source:"@site/docs/advanced/starting-a-test-network.md",slug:"/advanced/starting-a-test-network",permalink:"/docs/advanced/starting-a-test-network",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/advanced/starting-a-test-network.md",version:"current",sidebar:"Balls",previous:{title:"SWAP Bandwidth Accounting",permalink:"/docs/advanced/swap"},next:{title:"Large node operators",permalink:"/docs/advanced/large-node-operators"}},c=[{value:"Start a network on your own computer",id:"start-a-network-on-your-own-computer",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Starting Your Nodes",id:"starting-your-nodes",children:[]},{value:"Making a network",id:"making-a-network",children:[]}]}],d={toc:c};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"A test network can be used to test your applications in an isolated environment before you deploy to Swarm mainnet. It can be started by overriding the default configuration values of your Swarm node. Throughout this tutorial, we will make use of configuration files to configure the nodes but of course you can also do the same using flags or environment variables (see ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/configuration"}),"Start your node"),"). "),Object(r.a)("h2",{id:"start-a-network-on-your-own-computer"},"Start a network on your own computer"),Object(r.a)("h3",{id:"configuration"},"Configuration"),Object(r.a)("p",null,"Starting a network is easiest achieved by making use of configuration files. We need at least two nodes to start a network. Hence, below two configuration files are provided. Save them respectively as ",Object(r.a)("inlineCode",{parentName:"p"},"config_1.yaml")," and ",Object(r.a)("inlineCode",{parentName:"p"},"config_2.yaml"),"."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"config_1.yaml")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'network-id: 7357\napi-addr: :1633\np2p-addr: :1634\ndebug-api-addr: 127.0.0.1:1635\ndebug-api-enable: true\nbootnode: ""\ndata-dir: /tmp/bee/node1\npassword: some pass phze\nswap-enable: false\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"config_2.yaml")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'network-id: 7357\napi-addr: :1733\np2p-addr: :1734\ndebug-api-addr: 127.0.0.1:1735\ndebug-api-enable: true\ndata-dir: /tmp/bee/node2\nbootnode: ""\npassword: some pass phze\nwelcome-message: "Bzz Bzz Bzz"\nswap-enable: false\n')),Object(r.a)("p",null,"Note that for each node, we provide a different ",Object(r.a)("inlineCode",{parentName:"p"},"api-addr"),",\n",Object(r.a)("inlineCode",{parentName:"p"},"debug-api-addr"),". If we had not specified different addresses here, we\nwould get an ",Object(r.a)("inlineCode",{parentName:"p"},"address already in use")," error, as no two applications\ncan listen to the same port. We also specify a different\n",Object(r.a)("inlineCode",{parentName:"p"},"p2p-addr"),". If we had not, our nodes would not be able to communicate\nwith each other. We also specify a separate ",Object(r.a)("inlineCode",{parentName:"p"},"data-dir")," for each node,\nas each node must have its own separate key and chunk data store."),Object(r.a)("p",null,"We also provide a network-id, so that our network remains separate\nfrom the Swarm mainnet, which has network-id 1. Nodes will not connect\nto peers which have a different network id.  We also set our bootnode\nto be the empty string ",Object(r.a)("inlineCode",{parentName:"p"},'""'),". A bootnode is responsible for\nbootstrapping the network so that a new node can find its first few\npeers before it begins its own journey to find friends in the\nSwarm. In Swarm any node can be used as a bootnode. Later, we will\nmanually join our nodes together so in this case a bootnode isn't\nrequired."),Object(r.a)("p",null,"Finally, note the ",Object(r.a)("inlineCode",{parentName:"p"},"welcome-message")," in the first nodes configuration file. This is a friendly feature allowing you to send a message to peers that connect to you!"),Object(r.a)("h3",{id:"starting-your-nodes"},"Starting Your Nodes"),Object(r.a)("p",null,"Now we have created our configuration files, let's start our nodes by running ",Object(r.a)("inlineCode",{parentName:"p"},"bee start --config config_1.yaml"),", then in another Terminal session, run ",Object(r.a)("inlineCode",{parentName:"p"},"bee start --config-file config_2.yaml"),"."),Object(r.a)("p",null,"We can now inspect the state of our network by sending HTTP requests to the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/api-reference"}),"Debug API"),".."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s http://localhost:1635/topology | jq .connected\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"0\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s http://localhost:1735/topology | jq .connected\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"0\n")),Object(r.a)("p",null,"No connections yet? Right! Let's remedy that!"),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Here we are using the ",Object(r.a)("inlineCode",{parentName:"p"},"jq")," command line utility to count the amount of objects in the ",Object(r.a)("inlineCode",{parentName:"p"},"peers")," array in the JSON response we have received from our Debug API, learn more about how to install and use ",Object(r.a)("inlineCode",{parentName:"p"},"jq")," ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://stedolan.github.io/jq/"}),"here"),"."))),Object(r.a)("h3",{id:"making-a-network"},"Making a network"),Object(r.a)("p",null,"In order to create a network from our two isolated nodes, we must first instruct our nodes to connect to each other. This step is not explicitly needed if you connect to the main Swarm network, as the default bootnodes in the Swarm network will automatically suggest peers. "),Object(r.a)("p",null,"First, we will need to find out the network address of the first node. To do this, we send a HTTP request to the ",Object(r.a)("inlineCode",{parentName:"p"},"addresses")," endpoint of the Debug API. "),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl localhost:1635/addresses | jq\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "overlay": "f57a65207f5766084d3ebb6bea5e2e4a712504e54d86a00961136b514f07cdac",\n  "underlay": [\n    "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs",\n    "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs",\n    "/ip6/::1/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs",\n    "/ip4/xx.xx.xx.xx/tcp/40317/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs"\n  ]\n}\n')),Object(r.a)("p",null,"Here, we get firstly the ",Object(r.a)("strong",{parentName:"p"},"overlay address")," - this is the permanent address Swarm uses as your anonymous identity in the network and secondly, a list of all the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.libp2p.io/reference/glossary/#multiaddr"}),"multiaddresses"),", which are physical network addresses at which you node can be found by peers. "),Object(r.a)("p",null,"Note the addresses starting with an ",Object(r.a)("inlineCode",{parentName:"p"},"/ip4"),", followed by ",Object(r.a)("inlineCode",{parentName:"p"},"127.0.0.1"),", which is the ",Object(r.a)("inlineCode",{parentName:"p"},"localhost")," internal network in your computer. Now we can use this full address to be the bootnode of our second node so that when it starts up, it goes to this address and both nodes become peers of each other. Let's add this into our config_2.yaml file. "),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"config_2.yaml")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'network-id: 7357\napi-addr: :1733\np2p-addr: :1734\ndebug-api-addr: 127.0.0.1:1735\ndebug-api-enable: true\ndata-dir: /tmp/bee/node2\nbootnode: "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs"\npassword: some pass phze\nwelcome-message: "Bzz Bzz Bzz"\nswap-enable: false\n')),Object(r.a)("p",null,"Now, we can shut our second node and reboot with the new configuration."),Object(r.a)("p",null,"Look at the the output for your first node, you should see our connection message!"),Object(r.a)("p",null,"Let's also verify that we can see both nodes in using each other's Debug API's."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s http://localhost:1635/peers | jq\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s http://localhost:1635/peers | jq\n")),Object(r.a)("p",null,"Congratulations! You have made your own tiny two bee Swarm! \ud83d\udc1d \ud83d\udc1d"))}l.isMDXComponent=!0}}]);