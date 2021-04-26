/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

particlesJS("particles-js", {
	"particles": {
     //シェイプの設定「線を繋ぐ丸や三角形などのこと」
		"number": {
			"value": 50,　　 //シェイプの数
			"density": {
				"enable": true,　　//シェイプの密集度の変更
				"value_area": 800　　//密集度
			}
		},
		"color": {
			"value": "#0a84ff"　　 //シェイプの色
		},
		"shape": {
			"type": "circle",　　//形『circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像』
			"stroke": {
				"width": 0,　　 //外線の太さ
				"color": "#000000"　　//外線の色
			},
      // polygon選択時
			"polygon": {
				"nb_sides": 3　　//何角形か
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.3,　　 //透明度
			"random": true,　　//透明度ランダム
			"anim": {
				"enable": false,　　//透明度のアニメーションさせるかどうか
				"speed": 0.2,　　//アニメーションのスピード
				"opacity_min": 0.01,　　//透明度の最小値
				"sync": false　　//シェイプを同時にアニメーションさせるかどうか
			}
		},
		"size": {
			"value": 80,　　//シェイプの大きさ
			"random": true,　　//大きさランダム
			"anim": {
				"enable": false,　　//大きさアニメーション
				"speed": 40,　　//スピード
				"size_min": 0.1,　　//最小値
				"sync": false　　//同時にアニメーションするかどうか
			}
		},
     // 線の設定
		"line_linked": {
			"enable": false,　　//線を表示するかどうか
			"distance": 150,　　//点と点の間隔の距離
			"color": "#d6ffea",　　//線の色
			"opacity": 0.4,　　//透明度
			"width": 8.49808392258727　　//太さ
		},
    // 動きの設定
		"move": {
			"enable": true,　　//シェイプの動き
			"speed": 3,　　//個々の動きを止めるかどうか
			"direction": "right",　　 ////エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
			"random": true,
			"straight": false,　　//マウスオーバーでのみ動く
			"out_mode": "out",　　//エリア外に出たシェイプの動き(out、bounceより選択)
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
      //マウスオーバー時
			"onhover": {
				"enable": false,　　//マウスオーバーの許可
				"mode": "grab"　　//オーバー時の動き『grab(集まる)、repulse(逃げる)、bubble(シェイプが大きくなる)』
			},
			"onclick": {
				"enable": false,　　//クッリクの許可
				"mode": "push"　　//クリック時の動き『grab、repulse、bubble、push(増殖)、remove(死滅)』
			},
			"resize": true
		},
    //カーソルとシェイプの間の線
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {　　//カーソルからの距離
					"opacity": 1
				}
			},
      // 膨張
			"bubble": {
				"distance": 400,　　//カーソルからの距離
				"size": 40,　　//膨張する大きさ
				"duration": 2,　　//継続時間(クリック時のみ)
				"opacity": 8,
				"speed": 3　　//膨張スピード
			},
      // カーソルから逃げる
			"repulse": {
				"distance": 200,　　//距離
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4　　//増える数
			},
			"remove": {
				"particles_nb": 2　　//消える数
			}
		}
	},
	"retina_detect": true　　//Retina Displayを対応
});
