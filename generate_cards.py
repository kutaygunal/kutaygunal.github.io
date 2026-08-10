"""Generate minimal flat card icons for the Weekend-Projects showcase.

Style matched to existing card images:
  - 400x400 PNG
  - flat solid light lavender / periwinkle background (no gradient)
  - single flat minimalist geometric icon centered
  - muted purple + white accents
Renders at 4x and downsamples for smooth anti-aliased edges.
"""
from PIL import Image, ImageDraw, ImageFilter

SIZE = 400
SS = 4                       # supersample factor
W = H = SIZE * SS

# Muted palette matching the existing card images (flat bg + muted purple icons)
INDIGO   = (130, 115, 180)   # main icon — muted periwinkle purple
VIOLET   = (150, 135, 195)   # secondary accent
SOFT     = (160, 150, 200)   # softer accent
WHITE    = (255, 255, 255)
BG       = (200, 195, 215)   # flat solid background

def base():
    """Flat solid background canvas (matches existing cards)."""
    img = Image.new("RGB", (W, H), BG)
    return img

def rrect(dr, box, r, fill):
    dr.rounded_rectangle(box, radius=r, fill=fill)

def save(img, name):
    img = img.resize((SIZE, SIZE), Image.LANCZOS)
    img.save(name, "PNG")
    print("wrote", name)

def cx(frac): return int(W * frac)
def cy(frac): return int(H * frac)

# ---------------------------------------------------------------- 1. sorting
def sorting():
    img = base(); dr = ImageDraw.Draw(img)
    bars = [0.30, 0.55, 0.42, 0.78, 0.50, 0.90, 0.60]
    n = len(bars)
    bw = W * 0.11
    gap = (W - bw * n) / (n + 1)
    base_y = cy(0.78)
    top_y = cy(0.22)
    for i, hf in enumerate(bars):
        x0 = cx(0.18) + i * (bw + gap)
        h = (base_y - top_y) * hf
        y0 = base_y - h
        color = WHITE if i == 5 else INDIGO
        rrect(dr, [x0, y0, x0 + bw, base_y], r=bw * 0.35, fill=color)
    save(img, "assets/card_sort.png")

# ---------------------------------------------------------------- 2. habit_coin
def habit_coin():
    img = base(); dr = ImageDraw.Draw(img)
    cc = (cx(0.5), cy(0.5))
    r = W * 0.24
    dr.ellipse([cc[0]-r, cc[1]-r, cc[0]+r, cc[1]+r], fill=INDIGO)
    # check mark
    dr.line([cc[0]-r*0.42, cc[1], cc[0]-r*0.10, cc[1]+r*0.30],
            fill=WHITE, width=int(W*0.045))
    dr.line([cc[0]-r*0.10, cc[1]+r*0.30, cc[0]+r*0.45, cc[1]-r*0.30],
            fill=WHITE, width=int(W*0.045))
    save(img, "assets/card_habit.png")

# ------------------------------------------------------- 3. dark mode enhancer
def dark_mode():
    img = base(); dr = ImageDraw.Draw(img)
    cc = (cx(0.5), cy(0.5))
    r = W * 0.24
    dr.ellipse([cc[0]-r, cc[1]-r, cc[0]+r, cc[1]+r], fill=INDIGO)
    # contrast: lighter half
    dr.pieslice([cc[0]-r, cc[1]-r, cc[0]+r, cc[1]+r], 90, 270, fill=BG)
    # thin white divider
    dr.line([cc[0], cc[1]-r, cc[0], cc[1]+r], fill=WHITE, width=int(W*0.02))
    # separate small crescent moon, lower-right
    mc = (cx(0.74), cy(0.72)); mr = W * 0.075
    dr.ellipse([mc[0]-mr, mc[1]-mr, mc[0]+mr, mc[1]+mr], fill=WHITE)
    dr.ellipse([mc[0]-mr*0.55, mc[1]-mr*0.42, mc[0]+mr*1.25, mc[1]+mr*0.95],
               fill=BG)
    save(img, "assets/card_dark.png")

# -------------------------------------------------------------- 4. PurplePocket
def purple_pocket():
    img = base(); dr = ImageDraw.Draw(img)
    # wallet / pocket body (indigo)
    x0, y0, x1, y1 = cx(0.27), cy(0.34), cx(0.73), cy(0.72)
    rrect(dr, [x0, y0, x1, y1], r=cx(0.05), fill=INDIGO)
    # lighter pocket slit band (the pocket opening)
    band_y = cy(0.47)
    rrect(dr, [x0, band_y, x1, band_y + (y1-y0)*0.16], r=cx(0.02), fill=VIOLET)
    # pocket slit line
    dr.line([x0+cx(0.05), band_y, x1-cx(0.05), band_y], fill=WHITE,
            width=int(W*0.016))
    # clasp button at bottom center
    bc = (cx(0.50), cy(0.63)); br = cx(0.04)
    dr.ellipse([bc[0]-br, bc[1]-br, bc[0]+br, bc[1]+br], fill=WHITE)
    save(img, "assets/card_pocket.png")

# --------------------------------------------------------------- 5. NASA API
def nasa():
    img = base(); dr = ImageDraw.Draw(img)
    # planet with ring
    pc = (cx(0.62), cy(0.38))
    pr = cx(0.11)
    dr.ellipse([pc[0]-pr, pc[1]-pr, pc[0]+pr, pc[1]+pr], fill=INDIGO)
    # ring
    dr.ellipse([pc[0]-pr*1.9, pc[1]-pr*0.9, pc[0]+pr*1.9, pc[1]+pr*0.9],
               outline=VIOLET, width=int(W*0.03))
    dr.ellipse([pc[0]-pr*1.9, pc[1]-pr*0.9, pc[0]+pr*1.9, pc[1]+pr*0.9],
               outline=INDIGO, width=int(W*0.012))
    # rocket
    rx = cx(0.36); ry = cy(0.30)
    body_w = cx(0.11)
    body_h = cy(0.30)
    dr.ellipse([rx-body_w, ry-body_h*0.5, rx+body_w, ry+body_h*0.5], fill=SOFT)
    # nose
    dr.polygon([(rx-body_w, ry-body_h*0.32), (rx+body_w, ry-body_h*0.32), (rx, ry-body_h*0.85)],
               fill=SOFT)
    # window
    wr = body_w*0.38
    dr.ellipse([rx-wr, ry-body_h*0.05, rx+wr, ry+body_h*0.18], fill=WHITE)
    # flame
    dr.polygon([(rx-body_w*0.5, ry+body_h*0.5), (rx+body_w*0.5, ry+body_h*0.5),
                (rx, ry+body_h*0.9)], fill=INDIGO)
    # stars
    for (sx, sy, sr) in [(cx(0.18), cy(0.20), W*0.02), (cx(0.80), cy(0.62), W*0.015),
                         (cx(0.46), cy(0.14), W*0.012)]:
        dr.ellipse([sx-sr, sy-sr, sx+sr, sy+sr], fill=WHITE)
    save(img, "assets/card_nasa.png")

# -------------------------------------------------------------- 6. Angular
def angular():
    img = base(); dr = ImageDraw.Draw(img)
    # shield outline
    x0, x1 = cx(0.30), cx(0.70)
    y0 = cy(0.22); y1 = cy(0.76)
    mx = (x0 + x1) / 2
    # rounded shield
    pts = [(x0, y0), (x1, y0), (x1, y0+ (y1-y0)*0.55),
           (mx, y1), (x0, y0+(y1-y0)*0.55)]
    dr.polygon(pts, fill=INDIGO)
    # angular A mark in white
    ax0 = cx(0.40); ax1 = cx(0.60)
    ay0 = cy(0.34); ay1 = cy(0.66)
    amx = (ax0+ax1)/2
    # stroke width
    sw = cx(0.018)
    # left bar of A
    dr.line([(ax0, ay1), (amx, ay0)], fill=WHITE, width=int(sw))
    dr.line([(ax1, ay1), (amx, ay0)], fill=WHITE, width=int(sw))
    # crossbar
    dr.line([(ax0+cx(0.015), ay0+cy(0.17)), (ax1-cx(0.015), ay0+cy(0.17))],
            fill=WHITE, width=int(sw))
    save(img, "assets/card_angular.png")

# -------------------------------------------------------------- 7. Posturist
# posture training — a person standing straight with a checkmark
def posturist():
    img = base(); dr = ImageDraw.Draw(img)
    # head
    hc = (cx(0.44), cy(0.30)); hr = cx(0.085)
    dr.ellipse([hc[0]-hr, hc[1]-hr, hc[0]+hr, hc[1]+hr], fill=INDIGO)
    # straight back / body
    bx0, bx1 = cx(0.36), cx(0.52)
    by0, by1 = cy(0.40), cy(0.72)
    rrect(dr, [bx0, by0, bx1, by1], r=cx(0.05), fill=INDIGO)
    # checkmark (good posture) in white, lower-right
    cc = (cx(0.70), cy(0.60))
    sw = int(W*0.035)
    dr.line([cc[0]-cx(0.09), cc[1], cc[0]-cx(0.02), cc[1]+cx(0.08)],
            fill=WHITE, width=sw)
    dr.line([cc[0]-cx(0.02), cc[1]+cx(0.08), cc[0]+cx(0.10), cc[1]-cx(0.08)],
            fill=WHITE, width=sw)
    save(img, "assets/card_posturist.png")

# -------------------------------------------------------------- 8. VistaCAD
# Qt/OpenCASCADE 3D viewer — isometric cube
# -------------------------------------------------------------- 8. VistaCAD
def vista_cad():
    img = base(); dr = ImageDraw.Draw(img)
    # isometric cube faces
    top  = [(cx(0.50), cy(0.28)), (cx(0.68), cy(0.38)), (cx(0.50), cy(0.48)), (cx(0.32), cy(0.38))]
    left = [(cx(0.32), cy(0.38)), (cx(0.50), cy(0.48)), (cx(0.50), cy(0.70)), (cx(0.32), cy(0.60))]
    right= [(cx(0.68), cy(0.38)), (cx(0.50), cy(0.48)), (cx(0.50), cy(0.70)), (cx(0.68), cy(0.60))]
    dr.polygon(top,   fill=SOFT)
    dr.polygon(left,  fill=VIOLET)
    dr.polygon(right, fill=INDIGO)
    # white edge highlights on top face
    dr.line([top[0], top[1]], fill=WHITE, width=int(W*0.012))
    dr.line([top[0], top[3]], fill=WHITE, width=int(W*0.012))
    save(img, "assets/card_vista.png")

# -------------------------------------------------------------- 9. SocialOwls
# Angular course — owl face
# -------------------------------------------------------------- 9. SocialOwls
def social_owls():
    img = base(); dr = ImageDraw.Draw(img)
    # body
    bx0, bx1 = cx(0.30), cx(0.70)
    by0, by1 = cy(0.34), cy(0.78)
    rrect(dr, [bx0, by0, bx1, by1], r=cx(0.10), fill=INDIGO)
    # ear tufts
    dr.polygon([(cx(0.34), cy(0.36)), (cx(0.30), cy(0.20)), (cx(0.44), cy(0.30))], fill=INDIGO)
    dr.polygon([(cx(0.66), cy(0.36)), (cx(0.70), cy(0.20)), (cx(0.56), cy(0.30))], fill=INDIGO)
    # eyes (white with dark pupils)
    for ex in (cx(0.42), cx(0.58)):
        er = cx(0.085)
        dr.ellipse([ex-er, cy(0.50)-er, ex+er, cy(0.50)+er], fill=WHITE)
        pr = cx(0.038)
        dr.ellipse([ex-pr, cy(0.50)-pr, ex+pr, cy(0.50)+pr], fill=INDIGO)
    # beak
    dr.polygon([(cx(0.50), cy(0.60)), (cx(0.44), cy(0.66)), (cx(0.56), cy(0.66))], fill=SOFT)
    save(img, "assets/card_owls.png")

if __name__ == "__main__":
    sorting()
    habit_coin()
    dark_mode()
    purple_pocket()
    nasa()
    angular()
    posturist()
    vista_cad()
    social_owls()
