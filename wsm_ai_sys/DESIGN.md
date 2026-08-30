# WSM AI SYS — Living Himalayan Botanical Tree & Mountain Landscape Architecture

## 1. 3D Architectural Overview

**Design Benchmark & Source Integration:** `wsm_ai_sys/photorealistic-tree.html`

The website background now features a **Living Himalayan Botanical Tree & Mountain Landscape** rendered in Three.js with **100% zero external dependencies** (local `js/three.min.js`).

---

## 2. Realistic PBR Botanical Leaf Engineering

### A. Procedural High-Res Texture Synthesizer ($512 \times 512$ Canvas Maps)
1. **Diffuse Color Map with Venation Anatomy**:
   - Seasonal base tone grading with micro-epidermal cellular stippling.
   - Main midrib drop-shadow with specular spine.
   - 22 pairs of lateral curved pinnate veins radiating outward.
2. **Feathered Alpha Map**:
   - Organic broad leaf contour (tapered petiole base, convex lamina, acute apex tip).
   - Soft Gaussian blur feathering that eliminates crunchy, hard polygon edges.
3. **Baked Surface Normal Relief Map**:
   - Sobel/height-derivative calculation baking real physical leaf vein ridges and midrib grooves into the surface normal, capturing directional sunlight naturally.
4. **Emissive / Translucency Backlight Map**:
   - Soft translucent glow along veins and lamina when illuminated by the sun/celestial light.

### B. 3D Curved Camber Geometry
- `PlaneGeometry(0.28, 0.44)` deformed with:
  - Transverse V-channel depression along the midrib.
  - Longitudinal outward arch and downward apex curl.
  - Smooth vertex normals (`computeVertexNormals()`).
  - PBR `MeshStandardMaterial` (`roughness: 0.45 - 0.62`, `metalness: 0.02`, `depthWrite: true`, `side: THREE.DoubleSide`).

---

## 3. The 8-Atmosphere Seasonal Ecosystem & HUD Responsiveness

| Atmosphere Mode | Sky / Fog | Sun / Celestial | Foliage Palette | Bark | Terrain & Atmospheric Physics |
|---|---|---|---|---|---|
| **Summer Day** | `#aed4ef` / Sky blue | Sun at $55^\circ$ elev | Rich emerald & forest greens | Warm summer wood | Green grass (`0x4a6b2f`), subtle breeze |
| **Summer Night** | `#060910` / Midnight blue | Moon & stars dome | Deep nocturne greens with teal sheen | Deep wood | Nocturne grass, starfield opacity $0.85$ |
| **Autumn Day** | `#e8c98a` / Warm ochre | Golden sunlight | Flame amber, copper, russet, gold | Warm summer wood | Amber turf, fluttering falling leaves |
| **Autumn Night** | `#140b12` / Dusky ember | Low warm moon | Rich russet, umber, and dark ochre | Deep wood | Ground fallen leaves, gentle leaf fall |
| **Winter Day** | `#d8e8f0` / Crisp alpine | Soft pale sunlight | Frosted silver, ice cyan, and snow white | Frosted snowy bark | Snow caps on foliage, snowfall, snow accumulation |
| **Winter Night** | `#080f1a` / Aurora navy | Cool blue moonlight | Frosted navy & silver-blue foliage | Frosted snowy bark | Dense snowfall, glittering snow ground mounds |
| **Spring Day** | `#bfe3f0` / Radiant azure | Bright spring sun | Fresh apple green & cherry blossom pink | Warm summer wood | Vibrant spring grass, soft floral glow |
| **Spring Night** | `#0c1424` / Deep twilight | Soft spring moon | Twilight green & blossom magenta | Deep wood | Soft breeze, starfield dome |

---

## 4. Interactive Camera & Spatial Web Polish
- **Mouse Parallax**: Responsive orbital pitch and yaw on cursor movement.
- **Scroll Tracking**: Camera gracefully tracks and orbits around the tree and mountain landscape as the user navigates down the page.
- **Strict Zero CDN**: All scripts, shaders, geometries, and textures are 100% self-hosted locally.
