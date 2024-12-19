<script lang="ts" setup></script>

<template>
  <div class="flash-banner">
    <a class="flash-banner__item">
      <div class="flash-banner__item-timestamp">17:33</div>
      <div class="flash-banner__item-title">Äldre kvinna utsatt för bedrägeri försök i telefon</div>
    </a>
    <a class="flash-banner__item">
      <div class="flash-banner__item-timestamp">17:11</div>
      <div class="flash-banner__item-title">Lastbil och personbil i krock</div>
    </a>
    <a class="flash-banner__item">
      <div class="flash-banner__item-timestamp">16:59</div>
      <div class="flash-banner__item-title">Äldre kvinna utsatt för bedrägeri försök i telefon</div>
    </a>
    <a class="flash-banner__item">
      <div class="flash-banner__item-timestamp">13:24</div>
      <div class="flash-banner__item-title">Äldre kvinna utsatt för bedrägeri försök i telefon</div>
    </a>
    <a class="flash-banner__item">
      <div class="flash-banner__item-timestamp">12:56</div>
      <div class="flash-banner__item-title">This is the content of the flash banner</div>
    </a>
    <a class="flash-banner__item">
      <div class="flash-banner__item-timestamp">09:02</div>
      <div class="flash-banner__item-title">This is the content of the flash banner</div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.flash-banner {
  display: flex;
  width: 100%;
  height: 40px;
  background-color: $tertiary;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;

  &__item {
    display: inline-flex;
    align-items: center;
    border-left: 1px solid $on-tertiary;
    @include bodyMedium;
    gap: 6px;
    padding: 0 8px;
    flex-shrink: 0;

    &-timestamp {
      color: $tertiary;
      background-color: $on-tertiary;
      @include labelMedium;
      border-radius: 6px;
      padding: 2px 6px;
    }

    &-title {
      color: $on-tertiary;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
