import { useEffect } from 'react';
import * as THREE from 'three'

const useInit = () => {
  useEffect(() => {
    // 获取canvas元素
    const canvas = document.getElementById('webgl');
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 场景
    const scene = new THREE.Scene()

    // 相机
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    // 光照
    // 环境光
    const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
    scene.add(ambientLight)

    // render
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    })
      // 设置场景颜色
    renderer.setClearColor(new THREE.Color(0x000000), 1)
    renderer.setSize(width,height)
    renderer.render(scene, camera)

    return ()=>{
      renderer.dispose()
    }
  }, [])
}

export default useInit;