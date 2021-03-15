(this.webpackJsonpscoreboard=this.webpackJsonpscoreboard||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=n(8),i=n(5),s=n(1),u=n(2),m=n(4),p=n(3),d=function(e){var t=e.players.length,n=e.players.reduce((function(e,t){return e+t.score}),0);return r.a.createElement("table",{className:"stats"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Players:"),r.a.createElement("td",null,t)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Points:"),r.a.createElement("td",null,n))))},h=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isRunning:!1,elapsedTime:0,previousTime:0},e.tick=function(){if(e.state.isRunning){var t=Date.now();e.setState((function(n){return{previousTime:t,elapsedTime:n.elapsedTime+(t-e.state.previousTime)}}))}},e.handleStopwatch=function(){e.setState((function(e){return{isRunning:!e.isRunning}})),e.state.isRunning||e.setState({previousTime:Date.now()})},e.handleReset=function(){e.setState({elapsedTime:0})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=Math.floor(this.state.elapsedTime/1e3);return r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h2",null,"Stopwatch"),r.a.createElement("span",{className:"stopwatch-time"},e),r.a.createElement("button",{onClick:this.handleStopwatch},this.state.isRunning?"Stop":"Start"),r.a.createElement("button",{onClick:this.handleReset},"Reset"))}}]),n}(a.Component),y=function(e){var t=e.players,n=e.title;return r.a.createElement("header",null,r.a.createElement(d,{players:t}),r.a.createElement("h1",null,n),r.a.createElement(h,null))};y.defaultProps={title:"Scoreboard"};var f=y,v=function(e){var t=e.index,n=e.score,a=e.changeScore;return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"counter-action decrement",onClick:function(){return a(t,-1)}}," ","-"," "),r.a.createElement("span",{className:"counter-score"},n),r.a.createElement("button",{className:"counter-action increment",onClick:function(){return a(t,1)}}," ","+"," "))},b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.id,a=e.score,c=e.index,l=e.removePlayer,o=e.changeScore;return r.a.createElement("div",{className:"player"},r.a.createElement("span",{className:"player-name"},r.a.createElement("button",{className:"remove-player",onClick:function(){return l(n)}},"\u2716"),t),r.a.createElement(v,{score:a,index:c,changeScore:o}))}}]),n}(a.PureComponent),E=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).playerInput=r.a.createRef(),e.handleSubmit=function(t){t.preventDefault(),e.props.addPlayer(e.playerInput.current.value),t.currentTarget.reset()},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",ref:this.playerInput,placeholder:"Enter a player's name"}),r.a.createElement("input",{type:"submit",value:"Add Player"}))}}]),n}(a.Component),S=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={players:[{name:"Serg",score:0,id:1},{name:"Ars",score:0,id:2},{name:"Andrew",score:0,id:3},{name:"Edem",score:0,id:4}]},e.prevPlayerId=4,e.handleScoreChange=function(t,n){e.setState((function(e){var a=Object(i.a)(e.players),r=Object(o.a)({},a[t]);return r.score+=n,a[t]=r,{players:a}}))},e.handleAddPlayer=function(t){e.setState((function(n){return{players:[].concat(Object(i.a)(n.players),[{name:t,score:0,id:e.prevPlayerId+=1}])}}))},e.handleRemovePlayer=function(t){e.setState((function(e){return{players:e.players.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"scoreboard"},r.a.createElement(f,{title:"Scoreboard",players:this.state.players}),this.state.players.map((function(t,n){return r.a.createElement(b,{name:t.name,score:t.score,id:t.id,key:t.id.toString(),index:n,changeScore:e.handleScoreChange,removePlayer:e.handleRemovePlayer})})),r.a.createElement(E,{addPlayer:this.handleAddPlayer}))}}]),n}(a.Component);n(14);l.a.render(r.a.createElement(S,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ff9b6276.chunk.js.map