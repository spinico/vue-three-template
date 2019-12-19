import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './HelloWorld3D.html';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@WithRender
@Component
export default class HelloWorld3D extends Vue {
    @Prop() private msg!: string;

    private renderer!: THREE.WebGLRenderer;
    private scene = new THREE.Scene();
    private camera = new THREE.PerspectiveCamera(70, 640 / 480, 0.01, 100);
    private controls!: OrbitControls;

    private created() {
      if (!(this.renderer instanceof THREE.WebGLRenderer)) {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.autoClear = false;
        this.renderer.gammaInput = false;
        this.renderer.gammaOutput = false;
      }
    }

    private mounted() {
      // Using <div id="container" ... ></div>, access to DOM HTMLElement with $el
      const container = this.$el.children.namedItem('container') as HTMLElement;

      if (!container.contains(this.renderer.domElement)) {
        container.appendChild(this.renderer.domElement);

        this.camera.position.set(-10, 10, 10);

        this.controls = new OrbitControls(this.camera, container);
        this.controls.minDistance = 0;
        this.controls.maxDistance = 500;
        this.controls.autoRotate = true;
      }

      this.renderer.setSize(container.clientWidth, container.clientHeight);

      this.clear(this.scene);
      this.initialize(container);
      this.animate();
    }

    private initialize(container: HTMLElement): void {
      const lights = [];

      lights[ 0 ] = new THREE.PointLight(0xffffff, 1, 0);
      lights[ 1 ] = new THREE.PointLight(0xffffff, 1, 0);
      lights[ 2 ] = new THREE.PointLight(0xffffff, 1, 0);

      lights[ 0 ].position.set(0, 200, 0);
      lights[ 1 ].position.set(100, 200, 100);
      lights[ 2 ].position.set(-100, -200, -100);

      this.scene.add(lights[ 0 ]);
      this.scene.add(lights[ 1 ]);
      this.scene.add(lights[ 2 ]);

      const group = new THREE.Group();
      const geometry = new THREE.TorusGeometry(5, 2, 16, 100);
      const wireframe = new THREE.WireframeGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
      const meshMaterial = new THREE.MeshPhongMaterial({ color: 0x156289, emissive: 0x072534, flatShading: true });
      group.add(new THREE.LineSegments(wireframe, lineMaterial));
      group.add(new THREE.Mesh(geometry, meshMaterial));

      this.scene.add(group);
    }

    private animate(time: any = 0): void {
      time *= 0.001; // convert to seconds

      this.renderer.render(this.scene, this.camera);

      this.controls.update();

      requestAnimationFrame(this.animate);
    }

    private clear(obj: any): void {
      while (obj.children.length > 0) {
        this.clear(obj.children[0]);
        obj.remove(obj.children[0]);
      }

      if (obj.geometry) { obj.geometry.dispose(); }
      if (obj.material) { obj.material.dispose(); }
      if (obj.texture)  { obj.texture.dispose(); }
    }
}
