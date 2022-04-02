import pygame, sys, time, random
#from pygame import freetype

pygame.init()
DisplayWidth,DisplayHeight = 600, 600
clock = pygame.time.Clock()

gameDisplay = pygame.display.set_mode((DisplayWidth,DisplayHeight))
pygame.display.set_caption("Noodle Jump: Spicy Edition")

class Noodle_Manager (object):
    #def __init__(self):
    #    pass
    run = True

    while run:
        gameDisplay.fill((0,100,150))
        pos = pygame.mouse.get_pos()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False

pygame.quit()