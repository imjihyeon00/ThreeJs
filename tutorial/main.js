let scene, camera, renderer, cube;

/* Three.JS 初期化関数 */
function init() {
    /* scene - ステージ */
    scene = new THREE.Scene();

    /* camera */
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    /* renderer - 画面に表示 */
    renderer = new THREE.WebGLRenderer({antialias: true});
    /* 出力する所のサイズを設定 */
    renderer.setSize(window.innerWidth, window.innerHeight);
    /* 出力すると所 */
    document.body.appendChild(renderer.domElement);

    /* ボックスのサイズ決定、メッシュ（mesh피사체）、追加　*/
    const geometry = new THREE.BoxGeometry( 2, 2, 2 ); //width, height, depth
    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff }); //ボックスの素材やカラーなどを決定
    const texture = new THREE.TextureLoader().load('../textures/wall.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    /* 上の設定ではカメラが近すぎてボックスが見えないのでZサイズを調整する */
    camera.position.z = 5;
}

/* アニメーション制御 */
function animate() {
    //アニメーションが繰り返する(再帰関数)
    //frame単位て動く
    requestAnimationFrame(animate);

    /* アニメーション */
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}


/* ウィンドウ変更時にサイズを維持する処理 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize)
init();
animate();

