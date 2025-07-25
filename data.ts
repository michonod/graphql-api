export const data = {
  brands: [
    {
      id: "1",
      name: "Fender",
      origin: "USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Fender_guitars_logo.svg/800px-Fender_guitars_logo.svg.png",
      categories: ["ELECTRIC", "ACOUSTIC", "CLASSICAL", "BASS", "UKULELE"],
      models: [
        {
          id: "f1",
          name: "Stratocaster",
          type: "ELECTRIC",
          price: 2000,
          image:
            "https://www.fmicassets.com/Damroot/Zoom/10001/9235000560_gtr_frt_001_rr.png",
          description:
            "The Fender Stratocaster is an iconic electric guitar known for its contoured body, bright and versatile tone, and smooth playability. Introduced in 1954, it's been favored by countless legendary guitarists across genres, especially rock and blues.",
          specs: {
            bodyWood: "Alder",
            neckWood: "Maple",
            fingerboardWood: "Rosewood",
            pickups: "3x Single-Coil Strat",
            tuners: "Vintage-Style",
            scaleLength: "25.5 inches",
            bridge: "6-Saddle Synchronized Tremolo",
          },
          musicians: [
            {
              name: "Jimi Hendrix",
              musicianImage: "https://openclipart.org/image/800px/236716",
              bands: ["The Jimi Hendrix Experience", "Band of Gypsys"],
            },
            {
              name: "Eric Clapton",
              musicianImage:
                "https://www.rockarchive.com/media/1152/eric-clapton-ec003jf.jpg?crop=0,0.089524222077828314,0,0.26070319832503075&cropmode=percentage&width=800&height=800&rnd=131151327370000000&overlay=watermark.png&overlay.size=230,20&overlay.position=0,780",
              bands: ["Cream", "Derek and the Dominos", "The Yardbirds"],
            },
            {
              name: "David Gilmour",
              musicianImage:
                "https://static.wixstatic.com/media/70519f_477d6711776f4b2bba7f0052aabec941~mv2.png/v1/fill/w_560,h_806,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Crop%20Artists-01.png",
              bands: ["Pink Floyd"],
            },
            {
              name: "John Mayer",
              musicianImage:
                "https://guitar.com/wp-content/uploads/2023/10/John-Mayer2@2000x1500.jpg",
              bands: ["John Mayer Trio"],
            },
            {
              name: "Stevie Ray Vaughan",
              musicianImage:
                "https://img.texasmonthly.com/2000/04/SRV.jpg?auto=compress&crop=faces&fit=fit&fm=pjpg&ixlib=php-3.3.1&q=45",
              bands: ["Double Trouble"],
            },
          ],
        },
        {
          id: "f2",
          name: "Telecaster",
          type: "ELECTRIC",
          price: 5330,
          image:
            "https://www.fmicassets.com/Damroot/xLg/10020/9236091070_fcs_ins_frt_1_rr.png",
          description:
            "The Fender Telecaster is one of the world’s first mass-produced solid-body electric guitars, introduced in the early 1950s. Known for its bright, cutting tone and simple, durable design, the Telecaster has been a favorite among country, rock, blues, and indie musicians. Its distinctive twang and minimalist aesthetic make it a timeless classic.",
          specs: {
            bodyWood: "Ash",
            neckWood: "Maple",
            fingerboardWood: "Maple",
            pickups: "2x Single-Coil Tele",
            tuners: "Vintage-Style",
            scaleLength: "25.5 inches",
            bridge: "6-Saddle String-Through-Body",
          },
          musicians: [
            {
              name: "Bruce Springsteen",
              musicianImage:
                "https://upload.wikimedia.org/wikipedia/commons/f/f2/SpringsteenCardiff050524_%28138_of_166%29_%2853704146372%29_%28cropped%29.jpg",
              bands: ["E Street Band"],
            },
            {
              name: "Keith Richards",
              musicianImage:
                "https://cdn.britannica.com/95/249695-050-133490F5/Keith-Richards-Rolling-Stones-1975.jpg",
              bands: ["The Rolling Stones"],
            },
            {
              name: "Jimmy Page",
              musicianImage:
                "https://www.ultimate-guitar.com/static/article/draft/190862_hjGcnImZY1nUnqwI_101912.jpeg",
              bands: ["Led Zeppelin", "The Yardbirds"],
            },
            {
              name: "Jeff Buckley",
              musicianImage:
                "https://mixdownmag.com.au/wp-content/uploads/2017/09/jeff-buckley-1-1024x650.jpeg",
              bands: ["Jeff Buckley (solo)"],
            },
          ],
        },
        {
          id: "f3",
          name: "Jazz Bass",
          type: "BASS",
          price: 1030,
          image:
            "https://www.eastgatemusic.com.au/wp-content/uploads/2021/12/Fender-American-Professional-II-Jazz-Bass-Black.png",
          description:
            "The Fender Jazz Bass, introduced in 1960, is known for its smooth feel, rich low end, and versatile tone. Designed for jazz musicians but quickly adopted across genres like funk, rock, and soul, it features a slimmer neck and dual single-coil pickups, making it a go-to bass for expressive, articulate playing.",
          specs: {
            bodyWood: "Alder",
            neckWood: "Maple",
            fingerboardWood: "Rosewood",
            pickups: "2x Single-Coil Jazz Bass",
            tuners: "Standard Open-Gear",
            scaleLength: "34 inches",
            bridge: "4-Saddle Standard",
          },
          musicians: [
            {
              name: "Jaco Pastorius",
              musicianImage:
                "https://upload.wikimedia.org/wikipedia/commons/b/b6/Jaco_Pastorius_with_bass_1980.jpg",
              bands: ["Weather Report", "Jaco Pastorius Band"],
            },
            {
              name: "Marcus Miller",
              musicianImage:
                "https://cdn.ronniescotts.co.uk/uploads/_main_image/529578/Marcus-Miller-Thierry_Dubuc2-24.webp?v=1739279268",
              bands: ["Miles Davis Band", "Solo"],
            },
            {
              name: "Geddy Lee",
              musicianImage:
                "https://static-cdn.toi-media.com/www/uploads/2020/05/AP_978928417986.jpg",
              bands: ["Rush"],
            },
            {
              name: "Flea",
              musicianImage:
                "https://guitar.com/wp-content/uploads/2023/07/Flea-RHCP@2000x1500-1.jpg",
              bands: ["Red Hot Chili Peppers"],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Ibanez",
      origin: "Japan",
      image: "https://1000logos.net/wp-content/uploads/2020/03/Ibanez-Logo.png",
      categories: ["ELECTRIC", "ACOUSTIC", "BASS", "CLASSICAL"],
      models: [
        {
          id: "i1",
          name: "RG550",
          type: "ELECTRIC",
          price: 1500,
          image:
            "https://www.ibanez.com/common/product_artist_file/file/p_region_RG550_EB_00_04.png",
          description:
            "The Ibanez RG550 is an iconic shred guitar first released in 1987 as part of the original RG series. Designed for speed, precision, and versatility, it features a super-fast Wizard neck, high-output pickups, and a double-locking tremolo system. With its aggressive tone and ergonomic body, the RG550 became a favorite among metal and progressive guitarists worldwide.",
          specs: {
            bodyWood: "Basswood",
            neckWood: "Maple",
            fingerboardWood: "Maple",
            pickups: "HSH (2 Humbuckers, 1 Single Coil)",
            tuners: "Gotoh SG381",
            scaleLength: "25.5 inches",
            bridge: "Edge Tremolo",
          },
          musicians: [
            {
              name: "Steve Vai",
              musicianImage:
                "https://www.ibanez.com/common/product_artist_file/file/a_main_SteveVai.jpg",
              bands: ["Solo", "Frank Zappa", "David Lee Roth"],
            },
            {
              name: "Paul Gilbert",
              musicianImage:
                "https://www.ibanez.com/common/product_artist_file/file/a_main_PaulGilbert.jpg",
              bands: ["Racer X", "Mr. Big"],
            },
          ],
        },
        {
          id: "i2",
          name: "Artcore AS73",
          type: "ELECTRIC",
          price: 13000,
          image:
            "https://www.ibanez.com/common/product_artist_file/file/p_region_AS73_TBC_5B_06.png",
          description:
            "The Ibanez Artcore AS73 is a semi-hollow electric guitar that blends warm, resonant tone with rock-ready playability. Featuring a classic double-cutaway design, maple body, and dual humbuckers, the AS73 delivers smooth jazz cleans, bluesy warmth, and even gritty rock tones. Its comfortable neck and vintage-inspired looks make it a versatile favorite for players of all styles.",
          specs: {
            bodyWood: "Maple",
            neckWood: "Nyatoh",
            fingerboardWood: "Walnut",
            pickups: "2x Classic Elite Humbuckers",
            tuners: "Ibanez Die-Cast",
            scaleLength: "24.7 inches",
            bridge: "ART-1",
          },
          musicians: [
            {
              name: "George Benson",
              musicianImage:
                "https://www.udiscovermusic.com/wp-content/uploads/2020/03/George-Benson-GettyImages-98542527.jpg",
              bands: ["George Benson (solo)"],
            },
          ],
        },
        {
          id: "i3",
          name: "SR500",
          type: "BASS",
          price: 14000,
          image:
            "https://www.ibanez.com/common/product_artist_file/file/p_region_GSR105EX_BK_1P_02.png",
          description:
            "The Ibanez SR500 is a modern electric bass designed for fast playability, tonal versatility, and sleek aesthetics. Part of the renowned Soundgear series, it features a slim, contoured body, fast 5-piece neck, and powerful Bartolini pickups. The SR500 is ideal for players who want comfort, clarity, and dynamic tone across genres like rock, funk, metal, and jazz.",
          specs: {
            bodyWood: "Okoume",
            neckWood: "Jatoba/Walnut",
            fingerboardWood: "Jatoba",
            pickups: "Bartolini BH2",
            tuners: "Ibanez Machine Heads",
            scaleLength: "34 inches",
            bridge: "Accu-cast B500",
          },
          musicians: [
            {
              name: "Gary Willis",
              musicianImage:
                "https://www.ibanez.com/common/product_artist_file/file/a_main_GaryWillis.jpg",
              bands: ["Tribal Tech"],
            },
          ],
        },
        {
          id: "i4",
          name: "AEWC32FM",
          type: "ACOUSTIC",
          price: 10500,
          image:
            "https://www.ibanez.com/common/product_artist_file/file/p_region_AEWC32FM_ASF_5B_09.png",
          description:
            "The Ibanez AEWC32FM is a modern acoustic-electric guitar built for comfort and stage-ready performance. Featuring a slim, contoured body with a flamed maple top and sapele back and sides, it delivers a balanced, warm tone with eye-catching aesthetics. Its smooth AEWC body shape and Ibanez electronics make it ideal for players seeking easy playability and amplified acoustic clarity.",
          specs: {
            bodyWood: "Flamed Maple top / Sapele back & sides",
            neckWood: "Nyatoh",
            fingerboardWood: "Walnut",
            pickups: "Fishman Sonicore",
            tuners: "Die-cast gold",
            scaleLength: "25 inches",
            bridge: "Walnut",
          },
          musicians: [],
        },
      ],
    },
    {
      id: "3",
      name: "Gibson",
      origin: "USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Gibson_Guitar_logo.svg",
      categories: ["ELECTRIC", "ACOUSTIC", "BASS"],
      models: [
        {
          id: "g1",
          name: "Les Paul Standard",
          type: "ELECTRIC",
          price: 8000,
          image:
            "https://www.stars-music.com/medias/gibson/cropped-custom-shop-les-paul-standard-1959-2h-ht-rw-144189.png",
          description:
            "The Gibson Les Paul is one of the most iconic electric guitars in music history. Introduced in the early 1950s, it features a solid mahogany body with a carved maple top, dual humbuckers, and a set neck for rich sustain and powerful tone. Revered across genres from rock and blues to metal, the Les Paul is known for its warmth, depth, and legendary legacy.",
          specs: {
            bodyWood: "Mahogany with Maple top",
            neckWood: "Mahogany",
            fingerboardWood: "Rosewood",
            pickups: "Burstbucker 61R/61T Humbuckers",
            tuners: "Grover Rotomatics",
            scaleLength: "24.75 inches",
            bridge: "ABR-1 Tune-O-Matic",
          },
          musicians: [
            {
              name: "Slash",
              musicianImage:
                "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-183181-180668889.jpg",
              bands: [
                "Guns N' Roses",
                "Velvet Revolver",
                "Slash ft. Myles Kennedy",
              ],
            },
            {
              name: "Jimmy Page",
              musicianImage:
                "https://images.saymedia-content.com/.image/t_share/MTc0MjkzNTAyNzgyMzUwODQ0/jimmy-page-and-his-gibson-signature-les-paul-guitar.jpg",
              bands: ["Led Zeppelin", "The Yardbirds"],
            },
          ],
        },
        {
          id: "g2",
          name: "SG Standard",
          type: "ELECTRIC",
          price: 5000,
          image:
            "https://www.agderlyd.no/image/strengeinstrumenter/elektrisk-gitar/sg-standard-61-stop-bar-vc-1-1-png?v=638354708788630000",
          description:
            "The Gibson SG (Solid Guitar) is a bold, lightweight electric guitar introduced in 1961 as a successor to the Les Paul. Known for its aggressive tone, fast neck, and distinctive double-cutaway horns, the SG has been a staple in rock, metal, and punk. Its raw sound and sleek design make it a favorite for high-energy stage performance and hard-hitting riffs.",
          specs: {
            bodyWood: "Mahogany",
            neckWood: "Mahogany",
            fingerboardWood: "Rosewood",
            pickups: "490R/490T Humbuckers",
            tuners: "Grover Rotomatics",
            scaleLength: "24.75 inches",
            bridge: "Nashville Tune-O-Matic",
          },
          musicians: [
            {
              name: "Angus Young",
              musicianImage:
                "https://www.rollingstone.com/wp-content/uploads/2021/01/angus-young-q-and-a.jpg?w=1581&h=1054&crop=1",
              bands: ["AC/DC"],
            },
          ],
        },
        {
          id: "g3",
          name: "ES-335",
          type: "ELECTRIC",
          price: 1000,
          image:
            "https://www.stars-music.com/medias/gibson/cropped-custom-shop-historic-es335-reissue-1961-2h-ht-rw-169748.png",
          description:
            "The Gibson ES-335 is a semi-hollow body electric guitar that blends the warmth of a hollowbody with the sustain and feedback resistance of a solidbody. Introduced in 1958, its distinctive shape, smooth tone, and versatile character have made it a favorite across blues, jazz, rock, and soul. Known for its creamy cleans and expressive midrange, the ES-335 is both elegant and powerful.",
          specs: {
            bodyWood: "Maple/Poplar/Maple laminate",
            neckWood: "Mahogany",
            fingerboardWood: "Rosewood",
            pickups: "Calibrated T-Type",
            tuners: "Grover Rotomatics",
            scaleLength: "24.75 inches",
            bridge: "ABR-1 Tune-O-Matic",
          },
          musicians: [
            {
              name: "B.B. King",
              musicianImage:
                "https://static.wikia.nocookie.net/garfield/images/7/75/BBKing.jpg/revision/latest?cb=20150305213838",
              bands: ["B.B. King (solo)"],
            },
          ],
        },
        {
          id: "g4",
          name: "J-45",
          type: "ACOUSTIC",
          price: 5000,
          image:
            "https://www.stars-music.com/medias/gibson/cropped-j-45-studio-rosewood-modern-2024-dreadnought-epicea-palissandre-rw-206488.png",
          description:
            "The Gibson J-45, known as the 'workhorse' of acoustic guitars, is celebrated for its warm, balanced tone and exceptional versatility. Introduced in the late 1940s, its round-shoulder dreadnought body delivers rich lows and sparkling highs, making it a favorite among singer-songwriters, folk, and blues players. The J-45 combines classic looks with powerful, resonant sound.",
          specs: {
            bodyWood: "Sitka Spruce top, Mahogany back and sides",
            neckWood: "Mahogany",
            fingerboardWood: "Rosewood",
            pickups: "LR Baggs VTC",
            tuners: "Grover Rotomatics",
            scaleLength: "24.75 inches",
            bridge: "Traditional Belly-up, Rosewood",
          },
          musicians: [
            {
              name: "Bob Dylan",
              musicianImage:
                "https://static.wikia.nocookie.net/siivagunner/images/c/ce/Bobdylan.jpg/revision/latest?cb=20170511193437",
              bands: ["Bob Dylan (solo)"],
            },
          ],
        },
        {
          id: "g5",
          name: "Thunderbird Bass",
          type: "BASS",
          price: 6000,
          image:
            "https://www.stars-music.com/medias/gibson/cropped-custom-shop-gene-simmons-eb-0-bass-ltd-signature-rw-202079.png",
          description:
            "The Gibson Thunderbird Bass is a bold and distinctive instrument known for its unique reverse body design and powerful, punchy tone. Introduced in the 1960s, it features a mahogany body, neck-through construction, and humbucking pickups that deliver deep lows and aggressive mids. Favored by rock, punk, and metal bassists, the Thunderbird combines striking looks with versatile sound and excellent playability.",
          specs: {
            bodyWood: "Mahogany",
            neckWood: "Mahogany (Neck-through)",
            fingerboardWood: "Rosewood",
            pickups: "Rhythm/Lead Thunderbird",
            tuners: "Hipshot Ultralite",
            scaleLength: "34 inches",
            bridge: "3-Point Adjustable",
          },
          musicians: [
            {
              name: "Nikki Sixx",
              musicianImage:
                "https://www.rollingstone.com/wp-content/uploads/2025/07/GettyImages-1492425342.jpg?w=1581&h=1054&crop=1",
              bands: ["Mötley Crüe", "Sixx:A.M."],
            },
          ],
        },
      ],
    },
    {
      id: "4",
      name: "PRS",
      origin: "USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Prs_guitars_logo.png",
      categories: ["ELECTRIC", "ACOUSTIC", "BASS"],
      description:
        "The PRS Custom 24 is a flagship model known for its impeccable craftsmanship, versatile tone, and elegant design. Featuring a carved maple top over a mahogany body, a wide thin neck profile, and PRS's signature humbucking pickups with coil-tap options, the Custom 24 delivers everything from warm cleans to aggressive rock tones with clarity and sustain. It’s a favorite among professional players across many genres.",
      models: [
        {
          id: "prs1",
          name: "Custom 24",
          type: "ELECTRIC",
          price: 1070,
          image:
            "https://www.stars-music.com/medias/prs/cropped-custom-24-08-usa-2024-2h-trem-rw-215774.png",
          specs: {
            bodyWood: "Mahogany with Maple top",
            neckWood: "Mahogany",
            fingerboardWood: "Rosewood",
            pickups: "85/15 Humbuckers",
            tuners: "PRS Phase III Locking Tuners",
            scaleLength: "25 inches",
            bridge: "PRS Gen III Tremolo",
          },
          musicians: [
            {
              name: "Mark Holcomb",
              musicianImage:
                "https://guitar-compare.com/wp-content/uploads/2019/11/Mark-Holcomb_1904x1176px_01.jpg",
              bands: ["Periphery"],
            },
          ],
        },
        {
          id: "prs2",
          name: "McCarty 594",
          type: "ELECTRIC",
          price: 1700,
          image:
            "https://d159anurvk4929.cloudfront.net/blog/mccarty-model-prs-1920.png",
          description:
            "The PRS McCarty 594 is a vintage-inspired guitar that combines classic tones with modern playability. Featuring a thicker, more rounded neck and a mahogany body topped with figured maple, it offers warm, rich tones with enhanced sustain and resonance. Equipped with specially designed 58/15 LT pickups, the McCarty 594 is ideal for players seeking a versatile instrument for blues, jazz, and rock.",
          specs: {
            bodyWood: "Mahogany with Maple top",
            neckWood: "Mahogany",
            fingerboardWood: "Rosewood",
            pickups: "58/15 LT Humbuckers",
            tuners: "Vintage Style",
            scaleLength: "24.594 inches",
            bridge: "Two-Piece Stoptail",
          },
          musicians: [
            {
              name: "John Mayer",
              musicianImage:
                "https://cdn.britannica.com/72/135872-050-F43B5539/John-Mayer-2008.jpg",
              bands: ["John Mayer Trio", "Dead & Company"],
            },
          ],
        },
        {
          id: "prs3",
          name: "SE A50E",
          type: "ACOUSTIC",
          price: 1900,
          image:
            "https://d159anurvk4929.cloudfront.net/blog-legacy/straight1SEAlexLifeson.png",
          description:
            "The PRS SE A50E is an affordable, versatile acoustic-electric guitar designed for beginners and intermediate players. Featuring a solid mahogany top, back, and sides, it delivers warm, balanced tones with excellent projection. Equipped with PRS’s proprietary piezo pickup and preamp system, the A50E is perfect for both unplugged practice and live amplified performances.",
          specs: {
            bodyWood: "Maple back and sides, Solid Sitka Spruce top",
            neckWood: "Mahogany",
            fingerboardWood: "Ebony",
            pickups: "PRS-Voiced Fishman Sonitone",
            tuners: "PRS Designed",
            scaleLength: "25.3 inches",
            bridge: "Ebony",
          },
          musicians: [
            {
              name: "Dave Navarro",
              musicianImage:
                "https://npr.brightspotcdn.com/dims4/default/e11e08a/2147483647/strip/true/crop/1200x675+0+63/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F8a%2F10%2Fa9ecccba4fc9938af76a7857c731%2Fdave-navarro-ethan-miller.jpg",
              bands: ["Jane's Addiction", "Red Hot Chili Peppers"],
            },
          ],
        },
        {
          id: "prs4",
          name: "SE Kingfisher",
          type: "BASS",
          price: 1700,
          image:
            "https://gi-media.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/09/14183309/PRS-Kestrel-SE-Bass-1-1.png",
          description:
            "The PRS SE Kingfisher is a compact, travel-friendly acoustic guitar designed for players on the go. Featuring a solid Sitka spruce top and mahogany back and sides, it delivers a clear, balanced tone with impressive projection for its size. The Kingfisher’s small body and shorter scale length make it comfortable to play while maintaining PRS’s signature quality and craftsmanship.",
          specs: {
            bodyWood: "Swamp Ash",
            neckWood: "Maple/Walnut (5-piece)",
            fingerboardWood: "Rosewood",
            pickups: "PRS-designed Humbucking Bass Pickups",
            tuners: "Hipshot",
            scaleLength: "34 inches",
            bridge: "Hipshot TransTone",
          },
          musicians: [
            {
              name: "Gary Grainger",
              musicianImage:
                "https://www.eich-amps.com/media/251/gary-grainger.jpg",
              bands: ["Grainger Brothers", "John Scofield", "Acoustic Alchemy"],
            },
          ],
        },
      ],
    },
    {
      id: "5",
      name: "Martin",
      origin: "USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Martin_guitar_logo.png",
      categories: ["ACOUSTIC", "CLASSICAL"],
      models: [
        {
          id: "martin1",
          name: "D-28",
          type: "ACOUSTIC",
          price: 300,
          image:
            "https://www.stars-music.com/medias/martin-guitar/cropped-d-28-standard-dreadnought-epicea-palissandre-eb-58587.png",
          description:
            "The Martin D-28 is a legendary dreadnought acoustic guitar known for its powerful, balanced tone and exceptional projection. Since its introduction in the 1930s, the D-28 has been a favorite among bluegrass, folk, and country musicians. Featuring a solid Sitka spruce top with East Indian rosewood back and sides, it offers rich lows, clear highs, and a warm midrange that defines the classic Martin sound.",
          specs: {
            bodyWood: "East Indian Rosewood",
            neckWood: "Select Hardwood",
            fingerboardWood: "Ebony",
            pickups: "Optional LR Baggs Anthem",
            tuners: "Nickel Open Gear",
            scaleLength: "25.4 inches",
            bridge: "Ebony",
          },
          musicians: [
            {
              name: "Neil Young",
              musicianImage:
                "https://www.guitarnoise.com/wp-content/uploads/neil-young-farm-aid.jpg",
              bands: ["Buffalo Springfield", "Crosby, Stills, Nash & Young"],
            },
            {
              name: "Bob Dylan",
              musicianImage:
                "https://bobdylancenter.com/wp-content/uploads/sites/4/2021/12/Bob_with_Guitar_in_Studio-1-1024x683.jpg",
              bands: ["Bob Dylan (solo)"],
            },
            {
              name: "Paul Simon",
              musicianImage:
                "https://media.npr.org/assets/img/2011/04/04/paul-simon_general-2_credit-markseliger_custom-35abb4444c4f3fc3edf0059d67ed62df7f28b349.jpg?s=1100&c=50&f=jpeg",
              bands: ["Simon & Garfunkel"],
            },
          ],
        },
        {
          id: "martin2",
          name: "000-15M",
          type: "ACOUSTIC",
          price: 200,
          image:
            "https://www.martinguitar.com/on/demandware.static/-/Library-Sites-MartinSharedLibrary/default/dw7b340644/D-19-190th-Anniversary_frontal.png",
          description:
            "The Martin 000-15M is a classic small-bodied acoustic guitar known for its warm, mellow tone and all-mahogany construction. With its comfortable 000-size body and satin finish, it offers a rich midrange and smooth response, making it ideal for fingerstyle players and blues enthusiasts seeking a vintage vibe and intimate sound.",
          specs: {
            bodyWood: "Mahogany",
            neckWood: "Mahogany",
            fingerboardWood: "East Indian Rosewood",
            pickups: "Optional Fishman Matrix VT Enhance",
            tuners: "Nickel Open Gear",
            scaleLength: "25.4 inches",
            bridge: "East Indian Rosewood",
          },
          musicians: [
            {
              name: "Ed Sheeran",
              musicianImage:
                "https://static.wikia.nocookie.net/littlemix/images/a/ab/Ed-Sheeran.jpg/revision/latest?cb=20181001211030",
              bands: ["Ed Sheeran (solo)"],
            },
            {
              name: "Ben Howard",
              musicianImage:
                "https://guitar.com/wp-content/uploads/2023/08/Ben-Howard@2000x1500.jpg",
              bands: ["Ben Howard (solo)"],
            },
          ],
        },
        {
          id: "martin3",
          name: "LX1E Little Martin",
          type: "ACOUSTIC",
          price: 100,
          image:
            "https://onemanz.com/guitar/wp-content/uploads/sites/2/2025/01/Martin_OM-45_2025_s.png",
          description:
            "The Martin LX1E Little Martin is a compact and portable acoustic-electric guitar designed for travel and casual play. With its solid Sitka spruce top and high-pressure laminate (HPL) back and sides, it delivers surprisingly rich, full-bodied tone for its size. Equipped with Fishman electronics, the LX1E offers great amplified sound, making it a favorite among beginners and gigging musicians on the move.",
          specs: {
            bodyWood: "Mahogany Pattern HPL",
            neckWood: "Rust Birch Laminate",
            fingerboardWood: "Richlite",
            pickups: "Fishman Sonitone",
            tuners: "Chrome Enclosed Gear",
            scaleLength: "23 inches",
            bridge: "Richlite",
          },
          musicians: [
            {
              name: "Ed Sheeran",
              musicianImage:
                "https://static.wikia.nocookie.net/littlemix/images/a/ab/Ed-Sheeran.jpg/revision/latest?cb=20181001211030",
              bands: ["Ed Sheeran (solo)"],
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "Yamaha",
      origin: "Japan",
      image:
        "https://www.freepnglogos.com/uploads/yamaha-png-logo/yamaha-parkway-music-png-logo-17.png",
      categories: ["ACOUSTIC", "CLASSICAL", "ELECTRIC", "BASS"],
      models: [
        {
          id: "yamaha1",
          name: "FG800",
          type: "ACOUSTIC",
          price: 4300,
          image:
            "https://images.squarespace-cdn.com/content/v1/602065399c6bdd6741ed57e1/1706381431399-PVMYJEOOKRM6G59OU5G2/FG800J+Front.png",
          description:
            "The Yamaha FG800 is a highly regarded entry-level dreadnought acoustic guitar known for its excellent build quality, balanced tone, and affordability. Featuring a solid Sitka spruce top and nato back and sides, it delivers clear highs, warm mids, and strong lows, making it a favorite for beginners and experienced players alike. The FG800 offers great playability and rich sound for a variety of musical styles.",
          specs: {
            bodyWood: "Solid Spruce Top, Nato/Okoume Back & Sides",
            neckWood: "Nato",
            fingerboardWood: "Walnut",
            pickups: "None (acoustic)",
            tuners: "Die-cast Chrome",
            scaleLength: "25 inches",
            bridge: "Walnut",
          },
          musicians: [
            {
              name: "Billy Corgan",
              musicianImage:
                "https://www.ultimate-guitar.com/static/article/news/2/178382_0_wide_ver1746154921.jpg@1200",
              bands: ["The Smashing Pumpkins"],
            },
          ],
        },
        {
          id: "yamaha2",
          name: "PAC112V (Pacifica)",
          type: "ELECTRIC",
          price: 1600,
          image:
            "https://theguitarworld.com/cdn/shop/files/40442_yamaha_pacp12mbbb_Yamaha-PACP12M-BBB-Acclaim-THUMB.png?v=1710796223",
          description:
            "The Yamaha PAC112V Pacifica is a versatile and affordable electric guitar featuring a solid alder body, bolt-on maple neck with rosewood fingerboard, and an H/S/S pickup configuration with coil-splitting capability. Known for its balanced tone, smooth playability, and wide tonal range, the PAC112V is ideal for beginners and intermediate players across genres like rock, blues, and pop. Its vintage-style vibrato bridge and quality construction make it a reliable choice at an excellent value.",
          specs: {
            bodyWood: "Alder",
            neckWood: "Maple",
            fingerboardWood: "Rosewood",
            pickups: "HSS (1 Humbucker, 2 Single-Coil)",
            tuners: "Die-cast",
            scaleLength: "25.5 inches",
            bridge: "Vintage-style Tremolo",
          },
          musicians: [
            {
              name: "Mike Stern",
              musicianImage:
                "https://downbeat.com/images/news/_full/ART7087_Mike_Stern_by_Sandrine_Lee_72dpi_RGB_PR8391_copy.jpg",
              bands: ["Miles Davis Band", "Mike Stern Band"],
            },
          ],
        },
        {
          id: "yamaha3",
          name: "TRBX304",
          type: "BASS",
          price: 1070,
          image:
            "https://theguitarworld.com/cdn/shop/files/35995_yamaha_trb1006jcb_YAMAHA-TRB1006J_CB-ACCLAIM-THUMB.png?v=1710341514",
          description:
            "The Yamaha TRBX304 is a versatile 4-string electric bass guitar designed for players seeking a balance between performance and affordability. Featuring a sculpted solid mahogany body and a 5-piece maple/mahogany neck, it delivers a rich, resonant tone suitable for various musical styles. Equipped with Yamaha's exclusive Performance EQ active circuitry, the TRBX304 offers five performance-tuned EQ curves and a 2-band master equalizer, providing instant access to a wide range of tones. Its sleek design, combined with hum-canceling pickups and a comfortable neck profile, ensures both aesthetic appeal and playability",
          specs: {
            bodyWood: "Mahogany",
            neckWood: "Maple/Mahogany (5-piece)",
            fingerboardWood: "Rosewood",
            pickups: "2x M3 Ceramic Humbuckers",
            tuners: "Covered Die-cast",
            scaleLength: "34 inches",
            bridge: "Vintage Style",
          },
          musicians: [
            {
              name: "Nathan East",
              musicianImage:
                "https://www.ourventurablvd.com/wp-content/uploads/2024/11/nathan-East-8_23_-Photo-by-Rose-Eichenbaum_7.jpg",
              bands: ["Fourplay", "Eric Clapton Band"],
            },
            {
              name: "Billy Sheehan",
              musicianImage:
                "https://d2emr0qhzqfj88.cloudfront.net/s3fs-public/2018-09/BillySheehan-Header2_mobile.jpg",
              bands: ["Mr. Big", "The Winery Dogs"],
            },
          ],
        },
        {
          id: "yamaha4",
          name: "C40",
          type: "CLASSICAL",
          price: 8000,
          image:
            "https://theguitarworld.com/cdn/shop/files/36082_yamaha_gc12c_YAMAHA-GC12C-ACCLAIM-THUMB.png?v=1710770207",
          description:
            "The Yamaha C40 is a full-size classical guitar renowned for its exceptional value, making it an ideal choice for beginners and students. Crafted with a solid spruce top and meranti back and sides, it delivers a rich, balanced tone suitable for various musical styles. The rosewood fretboard and bridge enhance its warm sound, while the durable construction ensures long-lasting playability. With its affordable price point and quality craftsmanship, the C40 stands out as a reliable instrument for those starting their musical journey.",
          specs: {
            bodyWood: "Spruce Top, Meranti Back & Sides",
            neckWood: "Nato",
            fingerboardWood: "Rosewood",
            pickups: "None",
            tuners: "Chrome Classical",
            scaleLength: "25.6 inches",
            bridge: "Rosewood",
          },
          musicians: [
            {
              name: "Kaori Muraji",
              musicianImage:
                "https://www.savarez.com/sites/default/files/public/musicien/kaori_muraji_-_soleil_001.jpg",
              bands: ["Kaori Muraji (solo)"],
            },
          ],
        },
      ],
    },
    {
      id: "7",
      name: "Gretsch",
      origin: "USA",
      image:
        "https://getlogo.net/wp-content/uploads/2020/07/gretsch-guitars-logo-vector.png",
      categories: ["ELECTRIC", "ACOUSTIC"],
      models: [
        {
          id: "gretsch1",
          name: "G6120T-59 Vintage Select",
          type: "ELECTRIC",
          price: 1300,
          image:
            "https://www.premierguitar.com/media-library/gretsch-electromatic-5420t-review.png?id=30036905&width=1200&height=600&coordinates=0%2C100%2C0%2C100",
          description:
            "The Gretsch G6120T-59 Vintage Select '59 Chet Atkins Hollow Body with Bigsby is a meticulously crafted reissue of the iconic 1959 model, designed to capture the essence of Gretsch's storied past. This instrument combines vintage aesthetics with modern playability, making it a standout choice for discerning musicians.",
          specs: {
            bodyWood: "Laminated Maple",
            neckWood: "Maple",
            fingerboardWood: "Ebony",
            pickups: "TV Jones Classic Filter'Tron",
            tuners: "Grover Sta-Tite Open-Back",
            scaleLength: "24.6 inches",
            bridge: "Adjusto-Matic with Bigsby B6GP Vibrato",
          },
          musicians: [
            {
              name: "Chet Atkins",
              musicianImage:
                "https://s3-eu-west-1.amazonaws.com/musicgurus-static/uploads/artist/chet-atkins-76270e43.jpg",
              bands: ["Chet Atkins (solo)", "The Nashville A-Team"],
            },
            {
              name: "Brian Setzer",
              musicianImage:
                "https://upload.wikimedia.org/wikipedia/commons/7/7d/Brian_Salzburg_2006.JPG",
              bands: ["Stray Cats", "Brian Setzer Orchestra"],
            },
          ],
        },
        {
          id: "gretsch2",
          name: "G5420T Electromatic",
          type: "ELECTRIC",
          price: 13000,
          image:
            "https://stevesmusic.com/cdn/shop/files/2816939560_gre_ins_frt_1_rr.png?v=1720365654",
          description:
            "The Gretsch G5420T Electromatic Classic Hollow Body Single-Cut with Bigsby is a refined hollow-body electric guitar that blends vintage aesthetics with modern playability. Crafted with a laminated maple body and featuring Gretsch's signature trestle block bracing, this guitar delivers a focused tone with enhanced sustain and reduced feedback. Equipped with FT-5E Filter'Tron pickups, it offers a rich, full-bodied sound with classic Gretsch chime. The inclusion of a Bigsby B60 vibrato tailpiece allows for expressive pitch modulation, making it a versatile choice for various musical styles.",
          specs: {
            bodyWood: "Laminated Maple",
            neckWood: "Maple",
            fingerboardWood: "Rosewood",
            pickups: "Black Top Filter'Tron Humbuckers",
            tuners: "Vintage-Style Open-Back",
            scaleLength: "24.6 inches",
            bridge: "Adjusto-Matic with Bigsby B60",
          },
          musicians: [
            {
              name: "George Harrison",
              musicianImage:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/George_Harrison_1974_%28cropped%29.jpg/1200px-George_Harrison_1974_%28cropped%29.jpg",
              bands: ["The Beatles", "Traveling Wilburys"],
            },
          ],
        },
        {
          id: "gretsch3",
          name: "Rancher G5034TFT",
          type: "ACOUSTIC",
          price: 643,
          image:
            "https://foundsound.com.au/cdn/shop/products/2714014556_gre_ins_frt_01_rr_2048x.png?v=1646781354",
          description:
            "The Gretsch G5034TFT Rancher™ is a distinctive dreadnought acoustic-electric guitar that combines vintage aesthetics with modern features. It is part of the Gretsch Rancher™ series, known for its unique triangular soundhole and bold design. This model is equipped with a Fideli'Tron™ humbucking pickup and a Bigsby® B70G tailpiece, offering versatility for both acoustic and amplified performances.",
          specs: {
            bodyWood: "Solid Spruce Top, Laminated Maple Back & Sides",
            neckWood: "Mahogany",
            fingerboardWood: "Rosewood",
            pickups: "Fideli'Tron Humbucker",
            tuners: "Deluxe Die-Cast",
            scaleLength: "25 inches",
            bridge: "Rosewood with Compensated Synthetic Bone Saddle",
          },
          musicians: [
            {
              name: "Bo Diddley",
              musicianImage:
                "https://cdn.britannica.com/23/197923-050-EF827278/Bo-Diddley.jpg",
              bands: ["Bo Diddley (solo)"],
            },
          ],
        },
      ],
    },
    {
      id: "8",
      name: "Epiphone",
      origin: "USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Epiphone_guitars_logo.svg/2560px-Epiphone_guitars_logo.svg.png",
      categories: ["ELECTRIC", "ACOUSTIC", "BASS"],
      models: [
        {
          id: "epiphone1",
          name: "Les Paul Standard",
          type: "ELECTRIC",
          price: 10400,
          image:
            "https://guitarsforidiots.com/wp-content/uploads/2021/01/lp.png",
          description:
            "The Epiphone Les Paul Standard is a renowned electric guitar that offers classic Les Paul aesthetics and tone at an accessible price point. Part of Epiphone's 'Inspired by Gibson' collection, it faithfully recreates the look, feel, and sound of the early 1960s-era Les Pauls. This model is available in two main configurations: the '50s and '60s editions, each reflecting the distinctive features of their respective eras",
          specs: {
            bodyWood: "Mahogany with Maple Cap",
            neckWood: "Mahogany",
            fingerboardWood: "Indian Laurel",
            pickups: "ProBucker Humbuckers",
            tuners: "Grover Rotomatic",
            scaleLength: "24.75 inches",
            bridge: "LockTone Tune-o-matic",
          },
          musicians: [
            {
              name: "Slash",
              musicianImage:
                "https://faroutmagazine.co.uk/static/uploads/1/2023/05/Slash-November-Rain-Guns-N-Roses-1991-Far-Out-Magazine-F.jpg",
              bands: [
                "Guns N' Roses",
                "Slash ft. Myles Kennedy & The Conspirators",
              ],
            },
            {
              name: "Joe Bonamassa",
              musicianImage:
                "https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/19264455-joe-christie-3000x3000.jpeg",
              bands: ["Joe Bonamassa (solo)", "Black Country Communion"],
            },
          ],
        },
        {
          id: "epiphone2",
          name: "Casino",
          type: "ELECTRIC",
          price: 10500,
          image:
            "https://cdn.long-mcquade.com/files/373308/lg_3676a958cbc6334889f32950d6a3461b.png",
          description:
            "The Epiphone Casino is a legendary hollow-body electric guitar that has been a staple in rock and roll since its introduction in 1961. Notably favored by John Lennon, George Harrison, and Paul McCartney of The Beatles, the Casino is renowned for its distinctive tone and classic design.",
          specs: {
            bodyWood: "Laminated Maple",
            neckWood: "Mahogany",
            fingerboardWood: "Pau Ferro",
            pickups: "Dogear P-90 Classic™",
            tuners: "Vintage-style",
            scaleLength: "24.75 inches",
            bridge: "Tune-O-Matic with Trapeze Tailpiece",
          },
          musicians: [
            {
              name: "John Lennon",
              musicianImage:
                "https://img.apmcdn.org/d6d3fc04b7c66ddb0e925f2a344c93dc29672e44/uncropped/26d9b3-20131025-lennon.jpg",
              bands: ["The Beatles"],
            },
          ],
        },
        {
          id: "epiphone3",
          name: "DR-100",
          type: "ACOUSTIC",
          price: 1030,
          image:
            "https://www.stars-music.com/medias/epiphone/cropped-pro-1-acoustic-dreadnought-epicea-acajou-108628.png",
          description:
            "The Epiphone DR-100 is a classic acoustic guitar that has been a staple in the rock and roll scene since its introduction in 1961. This model is known for its distinctive tone and classic design, featuring a solid Sitka spruce top and mahogany back and sides. Its vintage-style bridge and high-quality construction make it a reliable choice for both acoustic and amplified performances.",
          specs: {
            bodyWood: "Select Spruce Top, Mahogany Back & Sides",
            neckWood: "Mahogany",
            fingerboardWood: "Rosewood",
            pickups: "None (acoustic)",
            tuners: "Premium Die-Cast",
            scaleLength: "25.5 inches",
            bridge: "Rosewood",
          },
          musicians: [
            {
              name: "Noel Gallagher",
              musicianImage:
                "https://upload.wikimedia.org/wikipedia/commons/2/2b/Noel_Gallagher_Glastonbury_2022_%28cropped%29.jpg",
              bands: ["Oasis", "Noel Gallagher’s High Flying Birds"],
            },
          ],
        },
        {
          id: "epiphone4",
          name: "Toby Standard IV",
          type: "BASS",
          price: 1300,
          image:
            "https://www.stars-music.com/medias/epiphone/cropped-eb-0-sg-bass-rw-57847.png",
          description:
            "The Epiphone Toby Standard IV is a classic bass guitar that has been a staple in the rock and roll scene since its introduction in 1961. This model is known for its distinctive tone and classic design, featuring a solid Sitka spruce top and walnut back and sides. Its vintage-style bridge and high-quality construction make it a reliable choice for both acoustic and amplified performances.",
          specs: {
            bodyWood: "Radiata (species of pine)",
            neckWood: "Hard Maple",
            fingerboardWood: "Rosewood",
            pickups: "Tobias SCR™ and SCT™ Split Humbuckers",
            tuners: "Deluxe Die-Cast",
            scaleLength: "34 inches",
            bridge: "Flush-Mount, Fully Adjustable",
          },
          musicians: [
            {
              name: "Jack Casady",
              musicianImage:
                "https://cdn.mos.cms.futurecdn.net/drNFbReTs8irUzHpsgAM7D.jpg",
              bands: ["Jefferson Airplane", "Hot Tuna"],
            },
          ],
        },
      ],
    },
    {
      id: "9",
      name: "Jackson",
      origin: "USA",
      image: "https://cdn.worldvectorlogo.com/logos/jackson-guitars-logo.svg",
      categories: ["ELECTRIC", "BASS"],
      models: [
        {
          id: "jackson1",
          name: "Soloist SLX",
          type: "ELECTRIC",
          price: 1200,
          image: "https://media.rainpos.com/9589/2910135539_gtr_frt_001_rr.png",
          description:
            "The Jackson X Series Soloist SLX DX is a high-performance electric guitar designed for modern rock and metal players seeking speed, comfort, and aggressive tone at an accessible price point. Part of Jackson’s X Series, it combines classic design elements with contemporary features to deliver a versatile instrument suitable for both rhythm and lead playing.",
          specs: {
            bodyWood: "Poplar",
            neckWood: "Maple (Through-body)",
            fingerboardWood: "Laurel",
            pickups: "Duncan Designed HB-102 Humbuckers",
            tuners: "Jackson Sealed Die-Cast",
            scaleLength: "25.5 inches",
            bridge: "Floyd Rose Special Double-Locking Tremolo",
          },
          musicians: [
            {
              name: "Marty Friedman",
              musicianImage:
                "https://cdn-images.dzcdn.net/images/artist/7dcf3eb3a5d60d0862a8d06d57bbbc25/1900x1900-000000-80-0-0.jpg",
              bands: ["Megadeth", "Cacophony", "Solo"],
            },
          ],
        },
        {
          id: "jackson2",
          name: "Rhoads RRX24",
          type: "ELECTRIC",
          price: 1400,
          image:
            "https://uk.jacksonguitars.com/cdn/shop/files/2913636552_jac_ins_frt_1_rr.png?v=1740193438",
          description:
            "The Jackson X Series Rhoads RRX24 is a high-performance electric guitar that pays homage to the iconic Randy Rhoads model while incorporating modern enhancements tailored for today's metal and hard rock players. This guitar combines aggressive aesthetics with cutting-edge features to deliver exceptional tone and playability.",
          specs: {
            bodyWood: "Poplar",
            neckWood: "Maple (Through-body)",
            fingerboardWood: "Laurel",
            pickups: "Jackson High-Output Humbuckers",
            tuners: "Jackson Sealed Die-Cast",
            scaleLength: "25.5 inches",
            bridge: "Floyd Rose Special",
          },
          musicians: [
            {
              name: "Randy Rhoads",
              musicianImage:
                "https://static01.nyt.com/images/2022/05/05/arts/05randy-rhoads/05randy-rhoads-mediumSquareAt3X.jpg",
              bands: ["Ozzy Osbourne", "Quiet Riot"],
            },
          ],
        },
        {
          id: "jackson3",
          name: "JS Series Concert Bass JS3",
          type: "BASS",
          price: 1500,
          image:
            "https://www.jacksonguitars.com/cdn/shop/files/2919011568_gtr_frt_001_rr.png?v=1740194050",
          description:
            "The Jackson JS Series Concert Bass JS3 is a four-string electric bass guitar designed to deliver powerful tone and exceptional playability, making it an excellent choice for bassists seeking a high-quality instrument at an affordable price.",
          specs: {
            bodyWood: "Poplar",
            neckWood: "Maple (Bolt-On)",
            fingerboardWood: "Amaranth",
            pickups: "Jackson High-Output Humbucking",
            tuners: "Jackson Sealed Die-Cast",
            scaleLength: "34 inches",
            bridge: "Jackson HiMass",
          },
          musicians: [
            {
              name: "David Ellefson",
              musicianImage:
                "https://sitstrings.com/wp-content/uploads/2021/09/david-ellefson.jpg",
              bands: ["Megadeth", "Ellefson"],
            },
          ],
        },
      ],
    },
    {
      id: "10",
      name: "Music Man",
      origin: "USA",
      image: "https://poldermeester.nl/images/gitaar/2015-05/musicman_logo.png",
      categories: ["ELECTRIC", "BASS"],
      models: [
        {
          id: "mm1",
          name: "StingRay Special",
          type: "BASS",
          price: 1500,
          image:
            "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-82.png?1729089330",
          description:
            "The Ernie Ball Music Man StingRay Special is a modern evolution of the iconic StingRay bass, first introduced in 1976. Renowned for its powerful tone and active electronics, the StingRay Special retains its classic features while incorporating contemporary enhancements for improved performance and comfort.",
          specs: {
            bodyWood: "Ash",
            neckWood: "Maple (5-piece)",
            fingerboardWood: "Rosewood",
            pickups: "Humbucking 2x Music Man Humbuckers",
            tuners: "Schaller® M4",
            scaleLength: "34 inches",
            bridge: "Music Man Modern Bass Bridge",
          },
          musicians: [
            {
              name: "Flea",
              musicianImage:
                "https://upload.wikimedia.org/wikipedia/commons/1/15/2016_Red_Hot_Chili_Peppers_-_Michael_Flea_Balzary_%28cropped%29.jpg",
              bands: ["Red Hot Chili Peppers"],
            },
            {
              name: "Tony Levin",
              musicianImage:
                "https://rockandrollglobe.com/wp-content/uploads/2021/06/IMG_Tokyo_20210606_083836_processed_20210606102226469_20210606114913780-scaled.jpg",
              bands: ["King Crimson", "Peter Gabriel Band"],
            },
          ],
        },
        {
          id: "mm2",
          name: "Axis Super Sport",
          type: "ELECTRIC",
          price: 1600,
          image:
            "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-105.png?1727235595",
          description:
            "The Axis Super Sport features a lightweight basswood body with a striking figured maple top, providing both aesthetic appeal and tonal clarity. Its ergonomic single-cutaway design ensures comfortable access to all 22 stainless steel frets, while the roasted maple neck with an asymmetric carve offers a smooth playing experience. The guitar is equipped with custom DiMarzio humbuckers, delivering a dynamic range of tones suitable for rock, blues, and beyond.",
          specs: {
            bodyWood: "Basswood",
            neckWood: "Maple",
            fingerboardWood: "Rosewood",
            pickups: "HSS DiMarzio Custom",
            tuners: "Schaller® M6 Mini Locking",
            scaleLength: "25.5 inches",
            bridge: "Music Man Two-Point Tremolo",
          },
          musicians: [
            {
              name: "John Petrucci",
              musicianImage:
                "https://johnpetrucci.com/wp-content/uploads/2020/05/jp-social.jpg",
              bands: ["Dream Theater"],
            },
          ],
        },
        {
          id: "mm3",
          name: "Cutlass RS",
          type: "ELECTRIC",
          price: 1300,
          image:
            "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-3.png?1716360607",
          description:
            "Cutlass RS features a lightweight basswood body with a striking figured maple top, providing both aesthetic appeal and tonal clarity. Its ergonomic single-cutaway design ensures comfortable access to all 22 stainless steel frets, while the roasted maple neck with an asymmetric carve offers a smooth playing experience. The guitar is equipped with custom DiMarzio humbuckers, delivering a dynamic range of tones suitable for rock, blues, and beyond.",
          specs: {
            bodyWood: "Ash",
            neckWood: "Maple",
            fingerboardWood: "Rosewood",
            pickups: "Custom-wound DiMarzio",
            tuners: "Schaller® M6 Mini Locking",
            scaleLength: "25.5 inches",
            bridge: "Two-Point Tremolo",
          },
          musicians: [
            {
              name: "Mark Tremonti",
              musicianImage:
                "https://guitar.com/wp-content/uploads/2023/10/Mark-Tremonti@2000x1500.jpg",
              bands: ["Alter Bridge", "Creed"],
            },
          ],
        },
      ],
    },
  ],
};
