import pygame, sys, time, random
#from pygame import freetype

pygame.init()
DisplayWidth,DisplayHeight = 400, 400
clock = pygame.time.Clock()

gameDisplay = pygame.display.set_mode((DisplayWidth,DisplayHeight))
pygame.display.set_caption("Noodle Jump")

Gimg = pygame.image.load('noodles1.jpg')
Gimg = pygame.transform.scale(Gimg, (250,250))

class Noodle_Manager (object):
    #def __init__(self):
    #    pass
    run = True

    while run:
        gameDisplay.fill((0,100,150))
        pos = pygame.mouse.get_pos()
        gameDisplay.blit(Gimg, (50, 50))

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False

pygame.quit()