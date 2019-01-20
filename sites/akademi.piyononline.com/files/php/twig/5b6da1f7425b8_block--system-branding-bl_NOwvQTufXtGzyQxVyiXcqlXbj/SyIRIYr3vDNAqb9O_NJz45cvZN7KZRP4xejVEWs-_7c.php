<?php

/* sites/all/themes/gavias_unix/templates/block/block--system-branding-block.html.twig */
class __TwigTemplate_ab9444493f2e8229a252b2a0dabdadebd7f3ce8dafdf779c6f6a0051b7acc65b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 16, "block" => 17, "if" => 18);
        $filters = array("t" => 19, "replace" => 21);
        $functions = array("path" => 19);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'block', 'if'),
                array('t', 'replace'),
                array('path')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 15
        echo "
";
        // line 16
        $context["attributes"] = $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => "site-branding"), "method");
        // line 17
        $this->displayBlock('content', $context, $blocks);
    }

    public function block_content($context, array $blocks = array())
    {
        // line 18
        echo "  ";
        if (($context["site_logo"] ?? null)) {
            // line 19
            echo "    <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("<front>")));
            echo "\" title=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Home")));
            echo "\" rel=\"home\" class=\"site-branding-logo\">
      ";
            // line 20
            if (($context["setting_logo"] ?? null)) {
                // line 21
                echo "         <img src=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_replace_filter(($context["site_logo"] ?? null), array(".svg" => ".png")), "html", null, true));
                echo "\" alt=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Home")));
                echo "\" />
      ";
            } else {
                // line 22
                echo "  
        <img src=\"";
                // line 23
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["site_logo"] ?? null), "html", null, true));
                echo "\" alt=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Home")));
                echo "\" />
      ";
            }
            // line 24
            echo "  
    </a>
  ";
        }
        // line 27
        echo "  ";
        if ((($context["site_name"] ?? null) || ($context["site_slogan"] ?? null))) {
            // line 28
            echo "    <div class=\"site-branding__text\">
      ";
            // line 29
            if (($context["site_name"] ?? null)) {
                // line 30
                echo "        <div class=\"site-branding__name\">
          <a href=\"";
                // line 31
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("<front>")));
                echo "\" title=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Home")));
                echo "\" rel=\"home\">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["site_name"] ?? null), "html", null, true));
                echo "</a>
        </div>
      ";
            }
            // line 34
            echo "      ";
            if (($context["site_slogan"] ?? null)) {
                // line 35
                echo "        <div class=\"site-branding__slogan\">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["site_slogan"] ?? null), "html", null, true));
                echo "</div>
      ";
            }
            // line 37
            echo "    </div>
  ";
        }
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/block/block--system-branding-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  120 => 37,  114 => 35,  111 => 34,  101 => 31,  98 => 30,  96 => 29,  93 => 28,  90 => 27,  85 => 24,  78 => 23,  75 => 22,  67 => 21,  65 => 20,  58 => 19,  55 => 18,  49 => 17,  47 => 16,  44 => 15,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/block/block--system-branding-block.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/block/block--system-branding-block.html.twig");
    }
}
