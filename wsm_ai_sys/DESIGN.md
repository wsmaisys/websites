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
| **Summer Day** | `#aed4ef` / Sky blue | Sun at $55^\circ$ elev | Rich chlorophyll & emerald greens | Warm summer wood | Lush emerald meadow turf (`0x487a2b`), granite rocks (`0x6e695f`), gentle breeze |
| **Summer Night** | `#060910` / Midnight blue | Moon & stars dome | Deep nocturne greens with teal sheen | Deep wood | Nocturnal forest turf (`0x142616`), night stone (`0x202426`), starfield dome |
| **Autumn Day** | `#e8c98a` / Warm ochre | Golden sunlight | Flame amber, copper, russet, gold | Warm summer wood | Golden-amber meadow turf (`0x8a6324`), rustic stone (`0x786b5e`), fluttering falling leaves |
| **Autumn Night** | `#140b12` / Dusky ember | Low warm moon | Rich russet, umber, and dark ochre | Deep wood | Nocturnal amber turf (`0x2a1c12`), dark stone (`0x221a16`), gentle leaf fall |
| **Winter Day** | `#d8e8f0` / Crisp alpine | Soft pale sunlight | Frosted silver, ice cyan, and snow white | Frosted snowy bark | Snow-dusted frost field (`0xdde6f0`), frosted slate (`0x8a929c`), snowfall, snow caps |
| **Winter Night** | `#080f1a` / Aurora navy | Cool blue moonlight | Frosted navy & silver-blue foliage | Frosted snowy bark | Moonlit frost ground (`0x121a28`), cool night stone (`0x1c2432`), dense snowfall |
| **Spring Day** | `#bfe3f0` / Radiant azure | Bright spring sun | Fresh tender emerald & spring greens | Warm summer wood | Vibrant young spring shoots (`0x4fa82c`), alpine granite (`0x5e666a`), wildflowers |
| **Spring Night** | `#0c1424` / Deep twilight | Soft spring moon | Fresh nocturne forest greens | Deep wood | Nocturnal dew meadow (`0x162c16`), night stone (`0x1e2422`), starfield dome |

---

## 4. Photorealistic Grass & Alpine Landscape Engineering

### A. Multi-Octave Fractal Ridge Mountain System
- **Fractal Elevation Generator**: 4 octaves of harmonic elevation (`Macro Massifs` + `Alpine Foothills` + `Rocky Crags & Gullies` + `Micro Earth Humus`).
- **Nature-Authentic Seasonal Terrain Shading**:
  - Center root zone transitions naturally into fertile organic soil.
  - Valley clearings and rolling meadow flats adopt the exact botanical color of each season (verdant emerald in summer, golden-amber in autumn, snow frost in winter, and fresh lime shoots in spring).
  - Steep mountain ridges ($> 28^\circ$) dynamically expose weathered alpine mountain rock.
  - High peaks ($y \ge \text{snowLine}$) wear snow caps across all seasons, with full accumulation in winter.

### B. 3D Organic Curved Grass Clumps & Wind Sway
- **3-Blade Star Clump Geometry**: 3 curved, arched blades tapering from a root base ($w=0.055$) to sharp tips with double-sided normals.
- **Procedural Grass Alpha & Fiber Striations**: $128 \times 256$ canvas texture with dark root gradient, lush chlorophyll mid-blade tone, translucent sunny tips, and vertical fibrous striations.
- **Dynamic Wind Breeze Physics**: Real-time harmonic undulating wave sway in `animate()` (`sin(t * 1.6)`).
- **Alpine Wildflowers & Boulders**: Instanced mountain boulders and seasonal wildflower blossoms (white Himalayan edelweiss and alpine blue poppies) blooming dynamically in Spring and Summer.

---

## 5. Interactive Camera & Spatial Web Polish
- **Mouse & Touch Parallax**: Responsive orbital pitch and yaw on cursor/touch drag.
- **Responsive Viewport Scaling**: Unified `worldGroup` scales smoothly (`0.50x` mobile, `0.72x` tablet, `1.0x` desktop) to maintain composition without exploding or zooming into the camera lens.
- **Strict Zero CDN**: All scripts, shaders, geometries, and textures are 100% self-hosted locally.
