import pygame, sys, time, random
#from pygame import freetype

pygame.init()
DisplayWidth,DisplayHeight = 400, 400
clock = pygame.time.Clock()

gameDisplay = pygame.display.set_mode((DisplayWidth,DisplayHeight))
pygame.display.set_caption("Noodle Jump")

class Noodle_Manager (object):

    run = True

    while run:
        gameDisplay.fill((0,100,150))
        pos = pygame.mouse.get_pos()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
    def game_loop():
        global Platforms
        global gravity
        global x
        global y
        global JumpAllowed
        global score
        global PlatformCount
        global RainbowNum
        global HighScore
        game_run = True
        Platforms = [[300,-100],[300,550]]
        score = 0
        PlatformCount = 0
        #if CurColor == "rainbow":
        #    RainbowNum = 0

        for i in range(6):
            Platforms.append([random.randint(150,450),(i*100) + 100])

        x = 400
        y = 500
        x_change = 0
        gravity = 0
        JumpAllowed = True

        while game_run == True:

            gameDisplay.fill((0,100,150))

            #Key Checker
            keys = pygame.key.get_pressed() 
            if keys[pygame.K_a]:
                x_change -= 0.5
            if keys[pygame.K_d]:
                x_change += 0.5
            
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_w and JumpAllowed == True:
                        tempX = x_change
                        if tempX <= 0:
                            tempX *= -1
                        gravity = -1 * tempX - 10
                        JumpAllowed = False
                if event.type == pygame.KEYUP:
                    if event.key == pygame.K_a or event.key == pygame.K_d:
                        x_change = 0 

            stop = False
            if x + x_change < 145:
                stop = True
            if x + x_change > 610:
                stop = True
            if stop == False:
                x += x_change
            y += gravity
            if gravity < 0:
                score += gravity * -1
            else:
                score += gravity
            
           # draw(0,0,"Overlay")
            #draw(0,0,"Score")

            for platform in Platforms:
                if y <= 100:
                    if PlatformCount >= 10:
                        platform[1] += 15 * PlatformCount/50 + 1
                elif y <= 300:
                    platform[1] += 10 * PlatformCount/50 + 1
                else:
                    platform[1] += 5 * PlatformCount/50 + 1
                if gravity < 0:
                    platform[1] -= gravity
               # if platform[1] >= 800:
                #    Platforms[Platforms.index(platform)] = randomPlatform()
                #    PlatformCount += 1
                #draw(platform[0],platform[1],"platform")

            #draw(x,y,"player")
            #boundaries()

            #if y >= 800:
               # if score > HighScore:
              #      HighScore = score
             #   MainScreen()

                

            pygame.display.flip()
            clock.tick(60)


#    clicked = False
    #HighScore = 0
    #MainScreen()

        #def __init__(self):
        #    pass


pygame.quit()