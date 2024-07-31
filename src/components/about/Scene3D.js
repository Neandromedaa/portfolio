import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { Scene } from "./Scene";

function Scene3D(){
    // const {scene} = useGLTF('../../public/Scene3D/untitled.glb')
    return <div className='scene'>
        <Canvas frameloop="demand" camera={{ position: [40, 0, 120], fov: 35 }}>
            <Center center>
                <Scene scale={2} />
            </Center>
            <ambientLight intensity={1}/>
            <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </Canvas>
    </div>
    
}

export default Scene3D;